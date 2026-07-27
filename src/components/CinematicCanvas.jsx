import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { animate, onScroll } from 'animejs'

const CREAM = new THREE.Color('#ffefb3')
const NIGHT = new THREE.Color('#062f2b')
const GOLD = new THREE.Color('#d8ba6a')
const SAGE = new THREE.Color('#9db9a9')
const clamp = (value) => Math.min(1, Math.max(0, value))

function makePanel(width, height, opacity = 0.18) {
  const geometry = new THREE.BoxGeometry(width, height, 0.08)
  const material = new THREE.MeshPhysicalMaterial({
    color: CREAM,
    transparent: true,
    opacity,
    roughness: 0.28,
    metalness: 0.04,
    transmission: 0.12,
    emissive: CREAM,
    emissiveIntensity: 0.08,
    side: THREE.DoubleSide,
  })
  return new THREE.Mesh(geometry, material)
}

function addPanelCluster(world, z, flip = false) {
  const group = new THREE.Group()
  group.position.set(flip ? -5.8 : 5.8, 0.4, z)
  group.rotation.y = flip ? 0.46 : -0.46

  const frame = makePanel(7.8, 4.4, 0.065)
  group.add(frame)

  for (let index = 0; index < 5; index += 1) {
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5 + index * 0.4, 0.25),
      new THREE.MeshStandardMaterial({
        color: GOLD,
        emissive: GOLD,
        emissiveIntensity: 0.08,
        transparent: true,
        opacity: 0.52,
      }),
    )
    bar.position.set(-2.4 + index * 1.1, -1.35 + (0.5 + index * 0.4) / 2, 0.2)
    group.add(bar)
  }

  const linePoints = [
    new THREE.Vector3(-2.7, 0.1, 0.26),
    new THREE.Vector3(-1.5, 0.65, 0.26),
    new THREE.Vector3(-0.3, 0.35, 0.26),
    new THREE.Vector3(1, 1.2, 0.26),
    new THREE.Vector3(2.6, 0.72, 0.26),
  ]
  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(linePoints),
      new THREE.LineBasicMaterial({ color: SAGE, transparent: true, opacity: 0.78 }),
  )
  group.add(line)
  world.add(group)
  return group
}

function addPortal(world, z, radius, rotation = 0) {
  const group = new THREE.Group()
  group.position.set(0, 0.4, z)
  group.rotation.z = rotation

  ;[0, 0.5, 1].forEach((offset, index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius + offset, 0.035 + index * 0.012, 10, 120),
      new THREE.MeshBasicMaterial({
        color: CREAM,
        transparent: true,
        opacity: 0.3 - index * 0.06,
        blending: THREE.AdditiveBlending,
      }),
    )
    group.add(ring)
  })

  world.add(group)
  return group
}

function addDataPath(world) {
  const points = [
    new THREE.Vector3(0, -3.75, 12),
    new THREE.Vector3(-1.2, -3.5, -4),
    new THREE.Vector3(1.8, -3.4, -22),
    new THREE.Vector3(-1.5, -3.2, -43),
    new THREE.Vector3(0, -2.7, -74),
  ]
  const curve = new THREE.CatmullRomCurve3(points)
  const path = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 180, 0.045, 8, false),
    new THREE.MeshBasicMaterial({
      color: CREAM,
      transparent: true,
      opacity: 0.86,
      blending: THREE.AdditiveBlending,
    }),
  )
  world.add(path)

  for (let lane = -3; lane <= 3; lane += 1) {
    if (lane === 0) continue
    const laneCurve = new THREE.CatmullRomCurve3(
      points.map((point, index) => point.clone().add(
        new THREE.Vector3(lane * (0.2 + index * 0.06), 0, 0),
      )),
    )
    world.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(laneCurve.getPoints(140)),
      new THREE.LineBasicMaterial({
        color: CREAM,
        transparent: true,
        opacity: 0.16,
      }),
    ))
  }
}

function addParticles(world, count) {
  const positions = new Float32Array(count * 3)
  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * 26
    positions[index * 3 + 1] = Math.random() * 13 - 4
    positions[index * 3 + 2] = 16 - Math.random() * 100
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particles = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: CREAM,
      size: 0.045,
      transparent: true,
      opacity: 0.56,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  )
  world.add(particles)
  return particles
}

function addLandscape(world) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(180, 180, 24, 24),
    new THREE.MeshStandardMaterial({
      color: NIGHT,
      roughness: 0.82,
      metalness: 0.08,
    }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.set(0, -4, -52)
  world.add(ground)

  const grid = new THREE.GridHelper(180, 90, CREAM, CREAM)
  grid.position.set(0, -3.94, -52)
  grid.material.transparent = true
  grid.material.opacity = 0.12
  world.add(grid)

  for (let index = 0; index < 34; index += 1) {
    const height = 0.8 + Math.random() * 5.8
    const tower = new THREE.Mesh(
      new THREE.BoxGeometry(0.2 + Math.random() * 0.36, height, 0.3),
      new THREE.MeshStandardMaterial({
        color: index % 3 === 0 ? GOLD : SAGE,
        emissive: index % 3 === 0 ? GOLD : SAGE,
        emissiveIntensity: 0.16,
        transparent: true,
        opacity: 0.38 + Math.random() * 0.35,
      }),
    )
    const side = index % 2 === 0 ? -1 : 1
    tower.position.set(side * (4.8 + Math.random() * 7), -4 + height / 2, -8 - Math.random() * 70)
    world.add(tower)
  }
}

export default function CinematicCanvas() {
  const canvasRef = useRef(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !window.WebGLRenderingContext) {
      setFallback(true)
      return undefined
    }

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: false,
        powerPreference: 'high-performance',
      })
    } catch {
      setFallback(true)
      return undefined
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.88

    const scene = new THREE.Scene()
    scene.background = NIGHT
    scene.fog = new THREE.FogExp2(NIGHT, 0.026)

    const camera = new THREE.PerspectiveCamera(
      54,
      window.innerWidth / window.innerHeight,
      0.1,
      180,
    )
    camera.position.set(0, 1, 15)

    const world = new THREE.Group()
    scene.add(world)

    scene.add(new THREE.HemisphereLight(CREAM, NIGHT, 2.2))
    const keyLight = new THREE.DirectionalLight(CREAM, 4.5)
    keyLight.position.set(-5, 10, 8)
    scene.add(keyLight)
    const rimLight = new THREE.PointLight(CREAM, 28, 48)
    rimLight.position.set(4, 3, -24)
    scene.add(rimLight)

    addLandscape(world)
    addDataPath(world)
    const particles = addParticles(world, window.innerWidth < 700 ? 520 : 1100)
    const panels = [
      addPanelCluster(world, 1, false),
      addPanelCluster(world, -17, true),
      addPanelCluster(world, -36, false),
      addPanelCluster(world, -56, true),
    ]
    const portals = [
      addPortal(world, 6, 3.8, 0.1),
      addPortal(world, -27, 5.1, -0.12),
      addPortal(world, -66, 6.4, 0.06),
    ]

    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      window.innerWidth < 700 ? 0.26 : 0.38,
      0.5,
      0.86,
    )
    composer.addPass(bloom)

    const pointer = new THREE.Vector2()
    const smoothPointer = new THREE.Vector2()
    const target = new THREE.Vector3()
    const clock = new THREE.Clock()
    const scrollState = { value: 0 }
    let scrollAnimation

    const setNativeProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight
      scrollState.value = distance > 0 ? clamp(window.scrollY / distance) : 0
    }

    const handlePointer = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(width, height)
      composer.setSize(width, height)
    }

    const render = () => {
      const elapsed = clock.getElapsedTime()
      const progress = clamp(scrollState.value)
      const travel = progress * 78

      smoothPointer.lerp(pointer, 0.045)
      camera.position.z += ((15 - travel) - camera.position.z) * 0.065
      camera.position.x += ((Math.sin(progress * Math.PI * 3) * 1.45 + smoothPointer.x * 0.75) - camera.position.x) * 0.045
      camera.position.y += ((0.8 + Math.sin(progress * Math.PI * 4) * 0.48 - smoothPointer.y * 0.4) - camera.position.y) * 0.045

      target.set(
        camera.position.x * 0.12,
        -0.15 + smoothPointer.y * 0.1,
        camera.position.z - 12,
      )
      camera.lookAt(target)

      world.rotation.y += ((smoothPointer.x * 0.025) - world.rotation.y) * 0.035
      particles.rotation.y = elapsed * 0.008
      particles.position.z = (progress * 5) % 5
      panels.forEach((panel, index) => {
        panel.position.y = 0.4 + Math.sin(elapsed * 0.45 + index) * 0.18
      })
      portals.forEach((portal, index) => {
        portal.rotation.z += 0.0007 * (index % 2 === 0 ? 1 : -1)
      })

      composer.render()
    }

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointer, { passive: true })
    window.addEventListener('scroll', setNativeProgress, { passive: true })
    canvas.addEventListener('webglcontextlost', () => setFallback(true), { once: true })
    setNativeProgress()

    scrollAnimation = animate(scrollState, {
      value: 1,
      ease: 'linear',
      autoplay: onScroll({
        target: '#story-root',
        enter: 'top top',
        leave: 'bottom bottom',
        sync: 0.16,
      }),
    })

    renderer.setAnimationLoop(render)

    return () => {
      renderer.setAnimationLoop(null)
      scrollAnimation?.revert?.()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointer)
      window.removeEventListener('scroll', setNativeProgress)
      composer.dispose()
      world.traverse((object) => {
        object.geometry?.dispose?.()
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose())
        } else {
          object.material?.dispose?.()
        }
      })
      renderer.dispose()
    }
  }, [])

  return (
    <>
      <div className={`webgl-fallback ${fallback ? 'is-visible' : ''}`} aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className={`cinematic-canvas ${fallback ? 'is-hidden' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
