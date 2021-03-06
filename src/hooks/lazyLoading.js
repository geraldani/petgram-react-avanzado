import { useEffect, useRef, useState } from 'react'

export function useLazyLoading () {
  const domElement = useRef(null)
  const [showElement, setShowElement] = useState(false)

  useEffect(() => {
    Promise.resolve(
      /* aqui estoy preguntando si el navegador ya trae esta api (intersepction observer), por lo cual si no la trae la importa (del paquete instaldo) y si la trae pues la ejecuta directamente sin traerse el paquete */
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer') /* esto es un import dinamico, se va a importar un paquete si cumple una condicion, para que se traspile esot correctamente hay q agregar un plugin a babel que se llama babel/plugin-syntax-dynamic-import */
    ).then(() => { // cuando se resuelva la promesa, entonces carga y ejecuta intersepcionObserver
      const observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setShowElement(true)
          observer.disconnect()
        } else {
          setShowElement(false)
        }
      })
      observer.observe(domElement.current)
    })
  }, [domElement])

  return [domElement, showElement]
}
