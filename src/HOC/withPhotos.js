import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

//esto es graphql, tengo que aprender mas de eso.. es para hacer fetching d datos de manera selectiva
export const withPhotos = graphql(gql`
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
`)
