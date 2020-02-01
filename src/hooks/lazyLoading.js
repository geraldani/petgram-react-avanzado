import { useEffect, useRef, useState } from 'react'

export function useLazyLoading () {
  const domElement = useRef(null)
  const [showElement, setShowElement] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowElement(true)
        observer.disconnect()
      } else {
        setShowElement(false)
      }
    })
    observer.observe(domElement.current)

  }, [domElement])

  return [domElement, showElement]
}
