import React from 'react'
import { Container, Button, ImageContainer } from './styles'
import { useLocalStorage } from '../../hooks/localStorage'
import { useLazyLoading } from '../../hooks/lazyLoading'
import { LikeButton } from '../LikeButton/LikeButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const imageDefault = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = imageDefault }) => {
  const [elDOM, showImage] = useLazyLoading()
  const key = `like-${id}` // esta key es para establecer un nombre unico para acceder a el en el localstorage
  const [liked, setLiked] = useLocalStorage(false, key)

  return (
    <Container ref={elDOM} id={'article-' + id}>
      {
        showImage &&
        <>
          <a href={`/?detail=${id}`}>
            <ImageContainer>
              <img src={src} alt={`image${id}`} id={`img${id}`} />
            </ImageContainer>
          </a>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleLikeClick = () => {
                  !liked && toggleLike({variables: { input: {id} }})
                  setLiked(!liked)
                }

                return <LikeButton {...{ liked, likes }} onClick={handleLikeClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Container>
  )
}
