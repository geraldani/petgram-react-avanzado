export const getData = async (url, ...functions) => {
  try {
    const [setLoading, setCategories] = functions
    setLoading(true)
    const res = await delayFetch(url, 1000)
    const response = await res.json()
    setCategories(response)
    setLoading(false)
  } catch (error) {
    console.log('Ocurrio un error: ', error)
  }
}

// Esto es para crear un retardo de 3 segundos para ver las animaciones de la carga de datos
function delayFetch (url, time = 0) { // recibe el tiempo
  return (
    time
      ? new Promise(resolve => { // este es con retardo
        setTimeout(() => {
          window.fetch(url)
            .then(res => {
              resolve(res)
            })
        }, time)
      })
      : window.fetch(url)// y este sin retardo
  )
}
