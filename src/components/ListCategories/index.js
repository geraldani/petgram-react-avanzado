import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { style } from './styles'
import { getData } from '../../utilities/fetch'

export const ListOfCategories = () => {
  const PIXELS = 200

  // ESTADO
  const [showFixed, setShowFixed] = useState(window.scrollY > PIXELS)
  const [categories, loadingList] = useFetchData()

  /* Efecto para modificar la clase de cuando la lista de elementos esta fija o no dependiendo de su posicion en la pantalla */
  useEffect(() => {
    function onScroll (e) {
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
      {renderList(showFixed, categories, loadingList, true)}
      {renderList(showFixed, categories, loadingList)}
    </>
  )
}

function renderList (fixed, categories, loading, isFirst = false) {
  return (
    <style.div>
      <style.ul isFirst={isFirst} fixedInOut={fixed}>
        {
          loading
            ? [...Array(8)].map((nro, index) => <style.li key={index}><Category /></style.li>)
            : categories.map(category => <style.li key={category.id}><Category {...category} /></style.li>)
        }
      </style.ul>
    </style.div>
  )
}

// un customHook para hacer fetchin de data
function useFetchData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData('https://petgram-server-geral-draamzgte.now.sh/categories', setLoading, setCategories) // llamado de la funcion para extraer la data
  }, [])

  return [categories, loading]
}
