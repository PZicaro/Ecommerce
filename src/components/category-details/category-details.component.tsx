import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useEffect, useState } from 'react'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../conveters/firestore.converters'
import Category from '../../types/category.type'
import { BiChevronLeft } from 'react-icons/bi'
import { CategoryTitle, Container, IconContainer, ProductsContainer } from './category-details.style'
import ProductItem from '../product.item/product.item.component'
import { useNavigate } from 'react-router-dom'
// import Category from '../../types/category.type'

interface CategoryDetailsProps {
    categoryId: string
}

const CategoryDetails:FunctionComponent<CategoryDetailsProps> = ({ categoryId }) => {
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/')
  }
  const [category, setCategory] = useState< Category | null >(null)
  useEffect(() => {
    const fetchCategory = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, 'categories').withConverter(categoryConverter), where('id', '==', categoryId))
      )
      const category = querySnapshot.docs[0]?.data()

      setCategory(category)
    }
    fetchCategory()
    console.log(category)
  }, [])
  return (
    <Container>
        <IconContainer onClick={handleBackClick}>
            <BiChevronLeft size={36}/>
        </IconContainer>
        <CategoryTitle>
            <p>Explorar   { category?.displayName}</p>
        </CategoryTitle>
        <ProductsContainer>
            {category?.products.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </ProductsContainer>
    </Container>
  )
}
export default CategoryDetails
