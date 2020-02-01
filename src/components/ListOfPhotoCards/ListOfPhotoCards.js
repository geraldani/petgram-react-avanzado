import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { photos } from '../../../api/db.json'

export const ListOfPhotoCards = () => (
  <div>
    {
      photos.map(photo =>
        <PhotoCard {...photo} key={photo.id} />
      )
    }
  </div>
)
