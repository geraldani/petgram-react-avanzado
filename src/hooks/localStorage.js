import { useState } from 'react'

export function useLocalStorage (initialValue, key) {
  /* Las claves y los valores de localStorage, son siempre cadenas de texto
  (tener en cuenta que, al igual que con los objetos, las claves de enteros se convertirán automáticamente en cadenas de texto). */
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const elem = window.localStorage.getItem(key)
      return elem === null ? initialValue : JSON.parse(elem) // JSON.parse convierte una cadena json a el objeto q lo representa
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value)) // JSON.stringify convierte un objeto a una cadena json objeto
      setStoreValue(value)
    } catch (err) {
      console.log('Error: ', err.message)
    }
  }

  return [storeValue, setLocalStorage]
}
