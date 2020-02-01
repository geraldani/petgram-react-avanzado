import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Items, Container, Item } from './styles'
import { useFetchData } from '../../hooks/fetch'

export const ListOfCategories = () => {
  const PIXELS = 200

  // ESTADO
  const [showFixed, setShowFixed] = useState(window.scrollY > PIXELS)
  const [categories, loading] = useFetchData('https://petgram-server-geral-draamzgte.now.sh/categories') // esto es para setear las categories del fetching

  /* Efecto para modificar la clase de cuando la lista de elementos esta fija o no dependiendo de su posicion en la pantalla */
  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > PIXELS
      if (newShowFixed !== showFixed) {
        setShowFixed(newShowFixed)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => { document.removeEventListener('scroll', onScroll) }
  }, [showFixed])

  return (
    <>
      {renderList(showFixed, categories, loading, true)}
      {renderList(showFixed, categories, loading)}
    </>
  )
}

function renderList (fixed, categories, loading, isFirst = false) {
  return (
    <Container>
      <Items isFirst={isFirst} fixedInOut={fixed}>
        {
          loading
            ? [...Array(8)].map((nro, index) => <Item key={index}><Category /></Item>)
            : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }
      </Items>
    </Container>
  )
}
