import * as React from 'react'
import '../styles/global.css'

const Footer = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  const footerRef = React.useRef(null)
  const brandNameRef = React.useRef(null)
  const brandContainerRef = React.useRef(null)

  React.useEffect(() => {
    let ticking = false
    const checkVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!footerRef.current) {
            ticking = false
            return
          }

          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop

          const isShortPage = documentHeight <= windowHeight + 100

          if (isShortPage) {
            setIsVisible(scrollTop > 10)
          } else {
            const distanceFromBottom = documentHeight - (scrollTop + windowHeight)
            setIsVisible(distanceFromBottom < 500)
          }
          ticking = false
        })
        ticking = true
      }
    }

    const timeoutId = setTimeout(checkVisibility, 100)
    checkVisibility()

    window.addEventListener('scroll', checkVisibility, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [])

  // Scale text proportionally to fill width of footer
  React.useEffect(() => {
    const scaleText = () => {
      if (!brandNameRef.current || !footerRef.current || !brandContainerRef.current) return

      const footer = footerRef.current
      const container = brandContainerRef.current
      const text = brandNameRef.current

      // Reset transform to get natural width
      text.style.transform = 'scale(1)'

      // Get the container width, accounting for padding (1rem = 16px on each side)
      const containerStyle = window.getComputedStyle(container)
      const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0
      const paddingRight = parseFloat(containerStyle.paddingRight) || 0
      const containerWidth = container.offsetWidth - paddingLeft - paddingRight
      const textWidth = text.scrollWidth

      if (textWidth > 0 && containerWidth > 0) {
        // Use proportional scale (not scaleX) to maintain aspect ratio
        // Add a small buffer (0.95) to ensure text doesn't get cut off
        const scale = (containerWidth / textWidth) * 0.95
        text.style.transform = `scale(${Math.min(scale, 1)})`
        text.style.transformOrigin = 'left bottom'
      }
    }

    if (isVisible) {
      // Small delay to ensure DOM is ready
      const timeoutId = setTimeout(scaleText, 50)
      scaleText()
      window.addEventListener('resize', scaleText, { passive: true })

      return () => {
        clearTimeout(timeoutId)
        window.removeEventListener('resize', scaleText)
      }
    }
  }, [isVisible])

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${isVisible ? 'visible' : ''}`}
    >
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-column-title">Legal</h3>
            <a href="/impressum" className="footer-link">Impressum</a>
            <a href="/terms" className="footer-link">Terms & Conditions</a>
            <p className="footer-copyright">© 2025 SpacialDB UG. All rights reserved.</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Contact</h3>
            <a href="mailto:team@decision-labs.com" className="footer-link footer-link-external">team@decision-labs.com</a>
            <a href="/contact" className="footer-link">Book a Call</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Follow</h3>
            <a href="https://linkedin.com/company/decision-labs" target="_blank" rel="noopener noreferrer" className="footer-link footer-link-external">LinkedIn</a>
            <a href="https://github.com/decision-labs" target="_blank" rel="noopener noreferrer" className="footer-link footer-link-external">GitHub</a>
            <a href="/feed" className="footer-link footer-link-follow">Feed</a>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
        </div>
        <div className="footer-brand" ref={brandContainerRef}>
          <h2 className="footer-brand-name" ref={brandNameRef}>Decision Labs</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
