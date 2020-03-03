import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Loader } from '../Utils'
import { withPhotos } from '../../HOC'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'


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

//este componente hace lo mismo que el componente anterios, solo que en vez de hacerlo con un HOC se usa render prpos
export const ListOfPhotoCardsWithQuey = ({ categoryId = 1 }) => {
  const queryWithPhotos = gql`
    query getPhotos($categoryId: ID){
      photos(categoryId: $categoryId){
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `
  return(
    <Query query={queryWithPhotos} variables={{categoryId}}>
      {
        ({error, loading, data }) => {
          const {photos} = data || {};
          if(loading) return <Loader/>
          if (error) return <p>Un error ha ocurrido</p>
          return(
            photos.map(photo => <PhotoCard {...photo} key={photo.id} />)
          )
        }
      }
    </Query>
  )
}
