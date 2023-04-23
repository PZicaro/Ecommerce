import { useEffect } from 'react'

import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.style'
import { useCategory } from '../../context/category.context'

const Categories = () => {
  const { categories, fetchCategories } = useCategory()
  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <CategoriesContainer>
        <CategoriesContent>
          {categories.map(category => <CategoryItem category={category} key={category.id}/>)}
        </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
