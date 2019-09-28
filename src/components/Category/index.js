import React from 'react'
import { style } from './styles'
const DEFAULT_IMAGE = 'https://www.loveyourdog.com/wp-content/uploads/2019/04/Toy-Poodle-768x427.jpg'
/* para usar syled components se define en el otro archivo la etiqueta con los estilos y exporto esa cadena y objeto para llamarla desde aca atravez del objeto */

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <style.a href={path}>
    <style.img src={cover} alt='cover' />
    {emoji}
  </style.a>
)
