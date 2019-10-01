import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { style } from './styles'

export const ListOfCategories = () => {
  const PIXELS = 200
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(window.scrollY > PIXELS)

  // fetch usando promesas
  /* useEffect(() => {
     window.fetch('https://petgram-server-geral-draamzgte.now.sh/categories')
       .then(res => res.json())
       .then(response => { setCategories(response) })
       .catch(err){
          console.log('Ocurrio un error: ', error)
       }
   }, []) */

  // fetch usando async/await
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await window.fetch('https://petgram-server-geral-draamzgte.now.sh/categories')
        const response = await res.json()
        setCategories(response)
      } catch (error) {
        console.log('Ocurrio un error: ', error)
      }
    }

    getData() // llamado de la funcion para extraer la data
  }, [])

  /* Efecto para modificar la clase de cuando la lista de elementos esta fija o no dependiendo de su posicion en la pantalla */
  useEffect(() => {
    function onScroll (e) {
      const newShowFixed = window.scrollY > PIXELS
      if (newShowFixed !== showFixed) {
        console.log('cambie')
        setShowFixed(newShowFixed)
      }
    }

    document.addEventListener('scroll', onScroll)
    return () => { document.removeEventListener('scroll', onScroll) }
  }, [showFixed])

  const renderList = (isFirst = false) => (
    <style.div>
      <style.ul isFirst={isFirst} fixedInOut={showFixed}>
        {
          categories.map((category) =>
            <style.li key={category.id}>
              <Category {...category} />
            </style.li>)
        }
      </style.ul>
    </style.div>
  )
  return (
    <>
      {renderList(true)}
      {renderList()}
      {/* {showFixed && renderList(showFixed)} */}
    </>
  )
}
