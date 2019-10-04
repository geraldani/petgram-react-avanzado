import React, { useEffect, useRef, useState } from 'react'
import { style } from './styles'
import { TiHeartOutline as HeartIcon } from 'react-icons/ti'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const elDOM = useRef(null)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    Promise.resolve(
      /* aqui estoy preguntando si el navegador ya trae esta api (intersepction observer), por lo cual si no la trae la importa (del paquete instaldo) y si la trae pues la ejecuta directamente sin traerse el paquete */
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer') /* esto es un import dinamico, se va a importar un paquete si cumple una condicion, para que se traspile esot correctamente hay q agregar un plugin a babel que se llama babel/plugin-syntax-dynamic-import */
    ).then(() => { // cuando se resuelva la promesa, entonces carga y ejecuta intersepcionObserver
      const observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setShowImage(true)
          observer.disconnect()
        } else {
          setShowImage(false)
        }
      })
      observer.observe(elDOM.current)
    })
  }, [elDOM])

  return (
    <style.article ref={elDOM} id={id}>
      {
        showImage &&
        <>
          <a href={`/detail/${id}`}>
            <style.div>
              <style.img src={src} alt={`image${id}`} id={`img${id}`} />
            </style.div>
          </a>
          <style.button>
            <HeartIcon size='25px' />{likes} likes!
          </style.button>
        </>
      }
    </style.article>
  )
}
