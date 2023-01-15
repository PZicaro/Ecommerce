import axios from 'axios'
import { useEffect, useState } from 'react'
import Category from '../../types/category.type'
import env from '../../config/env.config'
import CategoryItem from './category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.style'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }
  useEffect(() => {
    fetchCategories()
  }, [])
  console.log(categories)
  return (
    <CategoriesContainer>
        <CategoriesContent>
          {categories.map(category => <CategoryItem category={category} key={category.id}/>)}
        </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
