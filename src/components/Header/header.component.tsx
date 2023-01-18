import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './header.style'
const Header = () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <HeaderContainer>

      <HeaderTitle>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={ handleLoginClick}>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem> <BsCart size={25}/>
        <p style={{ marginLeft: 5 }}> 5 </p>
        </HeaderItem>

    </HeaderItems>
    </HeaderContainer>

  )
}
export default Header
