import React from 'react'
import { ListOfCategories } from '../components/ListCategories'
import { ListOfPhotoCardsWithQuey } from '../components/ListOfPhotoCards'

const Home = () => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuey categoryId={3} />
    </>
  )
}

export default Home
