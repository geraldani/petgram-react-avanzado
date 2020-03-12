import React from 'react'
import { ListOfCategories } from './components/ListCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards, ListOfPhotoCardsWithQuey } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardsWithQuery } from './containers/PhotoCardsWithQuery'
import Home from './Pages/Home'
import {Router} from '@reach/router'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail') // aqui guardo el id que me viene de la url en detail=id
  return (
    <>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardsWithQuery id={detailId}/>
          : <Router>
              <Home path='/' />
              <Home path='/animal/:id' />
            </Router>
      }
    </>
  )
}

export default App
