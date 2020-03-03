import { graphql } from 'react-apollo'
import {GET_PHOTOS} from '../Queries'

//esto es graphql, tengo que aprender mas de eso.. es para hacer fetching d datos de manera selectiva
export const withPhotos = graphql(GET_PHOTOS)
