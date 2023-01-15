import Category from '../../../types/category.type'
import { FunctionComponent } from 'react'
import { CategoryItemContainer, CategoryName } from './category-item.style'
interface CategoryItemProps {
    category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
     <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
    </CategoryName>
    </CategoryItemContainer>
  )
}
export default CategoryItem
