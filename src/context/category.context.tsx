/* eslint-disable no-redeclare */
import { collection, getDocs } from 'firebase/firestore'
import React, { createContext, FunctionComponent, useState } from 'react'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../conveters/firestore.converters'
import Category from '../types/category.type'

interface ICategoryContext {
    categories: Category[],
    fetchCategories: () => Promise<void>
}
interface CategoryContextProvider{
    children: React.ReactNode
}
export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve()
})

export const CategoryContextProvider: FunctionComponent<CategoryContextProvider> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    }
  }
  return <CategoryContext.Provider value={{ categories, fetchCategories }}> {children} </CategoryContext.Provider>
}
