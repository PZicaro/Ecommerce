import { FunctionComponent } from 'react'
import { ProductContainer, ProductImage, ProductInfo } from './product.item.style'
import Product from '../../types/product.type'

interface ProductItemProps {
    product: Product
}
const ProductItem :FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
        <ProductContainer>
            <ProductImage imageUrl={product.imageUrl}/>
            <ProductInfo>
                <p>{product.name}</p>
                <p>R${product.price},00</p>
            </ProductInfo>
        </ProductContainer>
  )
}
export default ProductItem
