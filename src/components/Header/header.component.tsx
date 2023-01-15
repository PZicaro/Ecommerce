import { BsCart } from 'react-icons/bs'
import { HeaderContainer } from './header.style'
import './header.style.css'
const Header = () => {
  return (
    <HeaderContainer>

      <h2 className="header-title">CLUB CLOTHING</h2>
      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar Conta</div>
        <div className="header-item"> <BsCart size={25}/>
        <p style={{ marginLeft: 5 }}> 5 </p>
        </div>

    </div>
    </HeaderContainer>

  )
}
export default Header
