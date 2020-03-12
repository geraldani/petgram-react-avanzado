import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Items, Container, Item, ItemsFloating, ErrorMessage } from './styles'
import { useFetchGetData } from '../../hooks/fetch'
import { ENDPOINTS } from '../../Constrants/Constantes'

export const ListOfCategories = () => {
  const PIXELS = 200

  const [showItemsFloating, setShowItemsFloating] = useState(window.scrollY > PIXELS)
  const [categories, loading, errorData] = useFetchGetData(ENDPOINTS.categories) // esto es para setear las categories del fetching

  /* Efecto para modificar la clase de cuando la lista de elementos esta fija o no dependiendo de su posicion en la pantalla */
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > PIXELS
      if (newShowFixed !== showItemsFloating) {
        setShowItemsFloating(newShowFixed)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showItemsFloating])

  const renderComponent = (Component) => {
    let WrappedComponent;

    if (errorData) WrappedComponent =  <ErrorMessage>😟 Ocurrio un error al traer la data 😪</ErrorMessage>
    else if (loading) WrappedComponent = [...Array(8)].map((nro, index) => <Item key={index}><Category /></Item>)
    else WrappedComponent = categories.map(category => <Item key={category.id}><Category {...category} path={`/animal/${category.id}`} /></Item>)

    return(
      <Component showFloating={showItemsFloating} key={Component}>
        {
          WrappedComponent
         /* errorData
            ? <ErrorMessage>😟 Ocurrio un error al traer la data 😪</ErrorMessage>
            : loading
              ? [...Array(8)].map((nro, index) => <Item key={index}><Category /></Item>)
              : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)*/
        }
      </Component>
    )
  }

  return (
    <Container>
      {
        [Items, ItemsFloating].map(component => renderComponent(component))
      }
    </Container>
  )
}



