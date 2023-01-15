import './categories.style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Category from '../../types/category.type'
import env from '../../config/env.config'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  console.log({ categories })
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
        </div>
    </div>
  )
}

export default Categories
