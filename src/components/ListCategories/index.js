import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { style } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  // usando promesas
  /* useEffect(() => {
     window.fetch('https://petgram-server-geral-draamzgte.now.sh/categories')
       .then(res => res.json())
       .then(response => { setCategories(response) })
       .catch(err){
          console.log('Ocurrio un error: ', error)
       }
   }, []) */

  // usando await
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
  return (
    <style.div>
      <style.ul>
        {
          categories.map((category) =>
            <style.li key={category.id}>
              <Category {...category} />
            </style.li>)
        }
      </style.ul>
    </style.div>
  )
}
