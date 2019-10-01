import React from 'react'
import { style } from './styles'
import { TiHeartOutline as HeartIcon } from 'react-icons/ti'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <style.article>
      <a href={`/detail/${id}`}>
        <style.div>
          <style.img src={src} alt={`image${id}`} id={`img${id}`} />
        </style.div>
      </a>
      <style.button>
        <HeartIcon size='25px' />{likes} likes!
      </style.button>
    </style.article>
  )
}
