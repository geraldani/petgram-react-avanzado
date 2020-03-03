import { gql } from 'apollo-boost'

const GET_SINGLE_PHOTO = gql`
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

const GET_PHOTOS = gql`
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

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`

export {
  GET_SINGLE_PHOTO,
  GET_PHOTOS,
  LIKE_PHOTO
}
