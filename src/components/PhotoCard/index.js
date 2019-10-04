import React, { useEffect, useRef, useState } from 'react'
import { style } from './styles'
import { TiHeartOutline as HeartIcon } from 'react-icons/ti'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const elDOM = useRef(null)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowImage(true)
        observer.disconnect()
      } else {
        setShowImage(false)
      }
    })
    observer.observe(elDOM.current)
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
