import React from 'react'
import { Image, Circle, Link, } from './styles'

/* para usar syled components se define en el otro archivo la etiqueta con los estilos y exporto esa cadena y objeto para llamarla desde aca atravez del objeto */
export const Category = ({ cover, path, emoji = '😴' }) => {
  return (
    <Link href={path}>
      {
        cover
          ? <Image src={cover} alt='cover' />
          : <Circle />
      }
      <span style={{ marginTop: '10px' }}>
        {emoji}
      </span>
    </Link>
  )
}
