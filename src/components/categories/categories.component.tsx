import { useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/category.context'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.style'

const Categories = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)
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
