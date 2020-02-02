import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Loader } from '../Utils'
import { withPhotos } from '../../HOC'

const PhotoCards = (props) => {
  let { data: { photos, loading } } = props
  return (
    <div>
      {
        loading
          ? <Loader />
          : photos.map(photo => <PhotoCard {...photo} key={photo.id} />)
      }
    </div>
  )
}

export const ListOfPhotoCards = withPhotos(PhotoCards)
