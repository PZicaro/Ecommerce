import { FunctionComponent } from "react"
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.style"
import { BsCartCheck } from 'react-icons/bs'
import CustomButton from "../custom-button/custom-button.component"
import useCartContext from "../../context/cart.context"

const Cart: FunctionComponent = () => {
    const { isVisible, toggleCart} = useCartContext()
    return (
        <CartContainer isVisible={isVisible}>
            
            <CartEscapeArea onClick={toggleCart}/>
            <CartContent>
                <CartTitle>Seu Carrinho</CartTitle>
                {/*produtos*/}
                <CartTotal>Total: R$999</CartTotal>
                <CustomButton>Ir para o checkout</CustomButton>

            </CartContent>
        </CartContainer>
    )

}

export default Cart
