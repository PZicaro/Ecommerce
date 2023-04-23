import { FunctionComponent, useEffect } from 'react'
import { useCategory } from '../context/category.context'
import { Container } from './categories-overview.style'
import CategoryOverview from '../components/category-overview/category-overview.component'

const CategoriesOverview : FunctionComponent = () => {
  const { categories, fetchCategories } = useCategory()

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
        <Container>
            {categories.map((category) =>
                <CategoryOverview key={category.id} category={category}/>
            )}
        </Container>
  )
}
export default CategoriesOverview
