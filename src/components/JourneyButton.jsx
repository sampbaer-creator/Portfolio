import PropTypes from 'prop-types'

export default function JourneyButton({ targetId, title, children }) {
  const handleClick = (event) => {
    event.preventDefault()

    window.dispatchEvent(new CustomEvent('portfolio:navigate', {
      detail: {
        targetId,
        title,
      },
    }))
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} className="journey-button">
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  )
}

JourneyButton.propTypes = {
  targetId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
