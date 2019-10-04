import React from 'react'
import { style } from './styles'
import { useLocalStorage } from '../../hooks/localStorage'
import { useLazyLoading } from '../../hooks/lazyLoading'
import { TiHeartOutline as HeartIcon, TiHeartFullOutline as HeartIconFull } from 'react-icons/ti'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [elDOM, showImage] = useLazyLoading()
  const key = `like-${id}` // esta key es para establecer un nombre unico para acceder a el en el localstorage
  const [liked, setLiked] = useLocalStorage(false, key)
  const IconLiked = liked ? HeartIconFull : HeartIcon // para saber si te gusta o no la imagen

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
          <style.button onClick={() => { setLiked(!liked) }}>
            <IconLiked size='25px' /> {likes} likes!
          </style.button>
        </>
      }
    </style.article>
  )
}
