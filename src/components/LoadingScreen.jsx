import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0)
  const words = ['Analyze', 'Report', 'Refine']
  const activeWord = words[Math.min(Math.floor(count / 34), words.length - 1)]

  useEffect(() => {
    const duration = 2300
    const start = performance.now()
    let frameId
    let finishId

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(eased * 100))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        finishId = window.setTimeout(onComplete, 420)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      window.clearTimeout(finishId)
    }
  }, [onComplete])

  return (
    <div className="loading-screen fixed inset-0 z-[9999] bg-primary text-parchment">
      <div className="absolute left-6 top-6 text-xs text-parchment/55 uppercase tracking-[0.3em]">
        Samuel Baer
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p key={activeWord} className="loading-word text-5xl md:text-7xl font-serif italic text-parchment/80">
          {activeWord}
        </p>
      </div>
      <div className="absolute bottom-10 right-6 text-6xl md:text-8xl font-serif tabular-nums">
        {String(count).padStart(3, '0')}
      </div>
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-accent/10">
        <div
          className="h-full accent-gradient origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 12px rgba(214, 154, 61, 0.42)',
          }}
        />
      </div>
    </div>
  )
}
