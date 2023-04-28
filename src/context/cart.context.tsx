import { FunctionComponent, createContext, useContext, useState } from "react";
import CartProducts from "../types/cart.types";

interface ICartContext {
    isVisible: boolean;
    products: CartProducts[];
    toggleCart: () => void
}
const CartContext = createContext <ICartContext> ({
    isVisible: false,
    products: [],
    toggleCart: () => {}
})
interface CartContextProviderProps {
    children: React.ReactNode
}
const CartContextProvider:FunctionComponent<CartContextProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [products, setProducts] = useState<CartProducts[]>([])
    const toggleCart = () => {
        setIsVisible((prevState)=> !prevState)
    }
    return (
        <CartContext.Provider value={{isVisible, products, toggleCart}}>
            {children}
        </CartContext.Provider>
    )


}
const useCartContext = () => {
    return useContext(CartContext)
}
export default CartContextProvider