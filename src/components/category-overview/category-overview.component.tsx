import { FunctionComponent, useContext, useEffect } from 'react'
import { Container } from './category-overview.style'
import { CategoryContext } from '../../context/category.context'

const CategoryOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])
  return (
        <Container>
            {categories.map((category) => <p key={category.id}>{category.displayName}</p>)}
        </Container>
  )
}

export default CategoryOverview
