import React from 'react'
import { style } from './styles'

/* para usar syled components se define en el otro archivo la etiqueta con los estilos y exporto esa cadena y objeto para llamarla desde aca atravez del objeto */
export const Category = ({ cover, path, emoji = '🤔' }) => {
  return (
    <style.a href={path}>
      {
        cover
          ? <style.img src={cover} alt='cover' />
          : <style.div />
      }
      <style.span>
        {emoji}
      </style.span>
    </style.a>
  )
}
