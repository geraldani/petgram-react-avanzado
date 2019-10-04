import { useState } from 'react'

export function useLocalStorage (initialValue, key) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const elem = window.localStorage.getItem(key)
      return elem === null ? initialValue : JSON.parse(elem)
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoreValue(value)
    } catch (err) {
      console.log('Error: ', err.message)
    }
  }

  return [storeValue, setLocalStorage]
}
