import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Loader } from '../Utils'

//esto es graphql, tengo que aprender mas de eso.. es para hacer fetching d datos de manera selectiva
const withPhotos = graphql(gql`
  query getPhotos{
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const PhotoCards = (props) => {
  let { data: { photos, loading } } = props
  return (
    <div>
      {
        loading
          ? <Loader/>
          : photos.map(photo => <PhotoCard {...photo} key={photo.id} />)
      }
    </div>
  )
}

export const ListOfPhotoCards = withPhotos(PhotoCards)
