import { signOut } from 'firebase/auth'
import { BsCart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase.config'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './header.style'
const Header = () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleHomeClick = () => {
    navigate('/')
  }
  const handleSignUpClick = () => {
    navigate('/sign-up')
  }
  return (
    <HeaderContainer>

      <HeaderTitle onClick={ handleHomeClick }>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={ handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
        <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        <HeaderItem> <BsCart size={25}/>
        <p style={{ marginLeft: 5 }}> 5 </p>
        </HeaderItem>

    </HeaderItems>
    </HeaderContainer>

  )
}
export default Header
