import React, {useState, useRef, useEffect} from 'react'

const FadeInSection = props => {
  const { direction } = props
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])
  return (
    <div
      className={`reveal  
            ${direction ? direction : ""} 
            ${isVisible ? "visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection
