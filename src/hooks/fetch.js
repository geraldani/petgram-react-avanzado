import { useEffect, useState } from 'react'

// un customHook para hacer fetchin de data
export function useFetchGetData (url, delay = 0) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorGettingData, setErrorGettingData] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await delayFetch(url, delay)
        const response = await res.json()
        setData(response)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setErrorGettingData(error)
      }
    })()
  }, [])
  return [data, loading, errorGettingData]
}

// Esto es para crear un retardo de 3 segundos para ver las animaciones de la carga de datos
function delayFetch (url, time) { // recibe el tiempo
  if (time !== 0) { // esta es con retardo
    return new Promise(resolve => {
      setTimeout(() => {
        window.fetch(url)
          .then(res => {
            resolve(res)
          })
      }, time)
    })
  } else return window.fetch(url)// y este sin retardo
}
