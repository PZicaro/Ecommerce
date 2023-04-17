import { useEffect } from 'react'
import { CategoryContextHook } from '../../context/category.context'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.style'

const Categories = () => {
  const { categories, fetchCategories } = CategoryContextHook()
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
