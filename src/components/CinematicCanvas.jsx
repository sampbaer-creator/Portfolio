import { useEffect, useRef } from 'react'
import { animate, onScroll } from 'animejs'

const SCENES = [
  { src: 'story/tee-off.png', start: 0, end: 0.34 },
  { src: 'story/data-corridor.png', start: 0.26, end: 0.72 },
  { src: 'story/horizon.png', start: 0.64, end: 1 },
]

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))

function coverImage(ctx, image, width, height, progress, alpha) {
  if (!image?.complete) return

  const baseScale = Math.max(width / image.naturalWidth, height / image.naturalHeight)
  const travelScale = baseScale * (1.03 + progress * 0.11)
  const drawWidth = image.naturalWidth * travelScale
  const drawHeight = image.naturalHeight * travelScale
  const driftX = (progress - 0.5) * width * 0.035
  const driftY = progress * height * -0.025

  ctx.save()
  ctx.globalAlpha = alpha
  ctx.drawImage(
    image,
    (width - drawWidth) / 2 + driftX,
    (height - drawHeight) / 2 + driftY,
    drawWidth,
    drawHeight,
  )
  ctx.restore()
}

export default function CinematicCanvas() {
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: false })
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId
    let scrollAnimation

    const images = SCENES.map(({ src }) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = `${import.meta.env.BASE_URL}${src}`
      image.onload = () => draw(progressRef.current)
      return image
    })
    imagesRef.current = images

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(window.innerWidth * ratio)
      canvas.height = Math.round(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      draw(progressRef.current)
    }

    const draw = (pageProgress) => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const width = window.innerWidth
        const height = window.innerHeight
        ctx.fillStyle = '#013e37'
        ctx.fillRect(0, 0, width, height)

        SCENES.forEach((scene, index) => {
          const local = clamp((pageProgress - scene.start) / (scene.end - scene.start))
          const fadeIn = index === 0 ? 1 : clamp(local / 0.22)
          const fadeOut = index === SCENES.length - 1 ? 1 : clamp((1 - local) / 0.2)
          coverImage(ctx, imagesRef.current[index], width, height, local, fadeIn * fadeOut)
        })

        const shade = ctx.createLinearGradient(0, 0, 0, height)
        shade.addColorStop(0, 'rgba(1, 62, 55, 0.14)')
        shade.addColorStop(0.54, 'rgba(1, 62, 55, 0.08)')
        shade.addColorStop(1, 'rgba(1, 62, 55, 0.62)')
        ctx.fillStyle = shade
        ctx.fillRect(0, 0, width, height)
      })
    }

    const nativeProgress = () => {
      if (reducedMotion) {
        progressRef.current = 0
        draw(0)
        return
      }
      const distance = document.documentElement.scrollHeight - window.innerHeight
      progressRef.current = distance > 0 ? clamp(window.scrollY / distance) : 0
      draw(progressRef.current)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', nativeProgress, { passive: true })
    nativeProgress()

    if (!reducedMotion) {
      const state = { value: progressRef.current }
      scrollAnimation = animate(state, {
        value: 1,
        ease: 'linear',
        autoplay: onScroll({
          target: '#story-root',
          enter: 'top top',
          leave: 'bottom bottom',
          sync: 0.12,
        }),
        onUpdate: () => {
          progressRef.current = clamp(state.value)
          draw(progressRef.current)
        },
      })
    }

    return () => {
      cancelAnimationFrame(frameId)
      scrollAnimation?.revert?.()
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', nativeProgress)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="cinematic-canvas"
      aria-hidden="true"
    />
  )
}
