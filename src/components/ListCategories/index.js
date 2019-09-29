import React from 'react'
import { Category } from '../Category'
import { style } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => (
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
