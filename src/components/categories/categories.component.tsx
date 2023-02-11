import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Category from '../../types/category.type'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.style'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../conveters/firebase.converter'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))
      const categoriesFromFirestore:Category[] = []
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {

    }
  }
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
