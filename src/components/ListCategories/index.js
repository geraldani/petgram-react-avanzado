import React from 'react'
import { Category } from '../Category'
import { style } from './styles'

export const ListOfCategories = () => (
  <style.div>
    <style.ul>
      {
        [1, 2, 3].map((elem) =>
          <style.li key={elem}><Category /></style.li>
        )
      }
    </style.ul>
  </style.div>
)
