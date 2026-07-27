import { useEffect, useState } from 'react'
import { animate } from 'animejs'
import PropTypes from 'prop-types'

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const state = { value: 4 }
    let finished = false
    const image = new Image()
    image.src = `${import.meta.env.BASE_URL}story/tee-off.png`

    const intro = animate(state, {
      value: 72,
      duration: 900,
      ease: 'out(3)',
      onUpdate: () => setCount(Math.round(state.value)),
    })

    const complete = () => {
      if (finished) return
      finished = true
      intro.pause()
      animate(state, {
        value: 100,
        duration: 420,
        ease: 'out(4)',
        onUpdate: () => setCount(Math.round(state.value)),
        onComplete: () => window.setTimeout(onComplete, 180),
      })
    }

    image.onload = complete
    image.onerror = complete
    if (image.complete) complete()

    return () => {
      intro.revert()
      image.onload = null
      image.onerror = null
    }
  }, [onComplete])

  return (
    <div className="loading-screen fixed inset-0 z-[9999]">
      <div className="loader-brand">
        <span>SB</span>
        <p>Samuel Baer</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="loader-orbit" aria-hidden="true"><i /><i /><i /></div>
        <p className="loading-word">Building the journey</p>
      </div>
      <div className="loader-count">
        {String(count).padStart(3, '0')}
      </div>
      <div className="loader-track">
        <div
          className="loader-fill"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </div>
  )
}

LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
}
