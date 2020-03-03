import React from 'react'
import { TiHeartOutline as HeartIconEmpty, TiHeartFullOutline as HeartIconFull } from 'react-icons/ti'

import { Button } from '../PhotoCard/styles'

export const LikeButton = ({liked, likes, onClick}) => {
  const IconLiked = liked ? HeartIconFull : HeartIconEmpty // para saber si te gusta o no la imagen

  return (
    <Button onClick={onClick}>
      <IconLiked size='25px' /> {likes} likes!
    </Button>
  )
}
