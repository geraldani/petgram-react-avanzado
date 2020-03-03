import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Loader } from '../components/Utils'

const query = gql`
  query getSinglePhoto($id: ID!){
    photo(id: $id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const PhotoCardsWithQuery = ({ id }) => {
  /*forma de hacerlo con un solo llamado a la api sin una nueva query
  const data = rest.data.photos
  let photo = {}
  if (data) {
    photo = data.find(p => p.id === id)
  }
  if (Object.values(photo).length === 0) return <h3>Cargando...</h3>
  return <PhotoCard {...photo} />*/
  return (
    <Query query={query} variables={{id}}>
      {
        ({error, loading, data }) => {
          const {photo} = data || {};
          if(loading) return <Loader/>
          if (error) return <p>Un error ha ocurrido</p>
          return(
            <PhotoCard {...photo} />
          )
        }
      }
    </Query>
  )
}

// export const PhotoCardsWithQuery = withPhotos(PhotoCardsWith)
