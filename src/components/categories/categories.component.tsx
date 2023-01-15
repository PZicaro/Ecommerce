import './categories.style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Category from '../../types/category.type'
import env from '../../config/env.config'
import CategoryItem from './category-item/category-item.component'

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
    <div className="categories-container">
        <div className="categories-content">
          {categories.map(category => <CategoryItem category={category} key={category.id}/>)}
        </div>
    </div>
  )
}

export default Categories
