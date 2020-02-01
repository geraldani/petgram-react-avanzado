import React from 'react'
import { Container, Button, ImageContainer } from './styles'
import { useLocalStorage } from '../../hooks/localStorage'
import { useLazyLoading } from '../../hooks/lazyLoading'
import { TiHeartOutline as HeartIconEmpty, TiHeartFullOutline as HeartIconFull } from 'react-icons/ti'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [elDOM, showImage] = useLazyLoading()
  const key = `like-${id}` // esta key es para establecer un nombre unico para acceder a el en el localstorage
  const [liked, setLiked] = useLocalStorage(false, key)
  const IconLiked = liked ? HeartIconFull : HeartIconEmpty // para saber si te gusta o no la imagen

  return (
    <Container ref={elDOM} id={'article-' + id}>
      {
        showImage &&
        <>
          <a href={`/detail/${id}`}>
            <ImageContainer>
              <img src={src} alt={`image${id}`} id={`img${id}`} />
            </ImageContainer>
          </a>
          <Button onClick={() => { setLiked(!liked) }}>
            <IconLiked size='25px' /> {likes} likes!
          </Button>
        </>
      }
    </Container>
  )
}
