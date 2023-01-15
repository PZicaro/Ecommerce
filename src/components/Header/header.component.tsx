import { BsCart } from 'react-icons/bs'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './header.style'
const Header = () => {
  return (
    <HeaderContainer>

      <HeaderTitle>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem> <BsCart size={25}/>
        <p style={{ marginLeft: 5 }}> 5 </p>
        </HeaderItem>

    </HeaderItems>
    </HeaderContainer>

  )
}
export default Header
