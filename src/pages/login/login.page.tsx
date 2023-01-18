/* eslint-disable react/no-children-prop */
import CustomButton from '../../components/custon-button/custom-button'
import Header from '../../components/Header/header.component'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './login.style'
import { BsGoogle } from 'react-icons/bs'

const LoginPage = () => {
  return (
        <>
        <Header/>
        <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre Com Sua Conta</LoginHeadline>
          <CustomButton startIcon={ <BsGoogle/> }>Entrar com o Google</CustomButton>
        <LoginSubtitle>ou entre com seu email</LoginSubtitle>
        <LoginInputContainer>
          { /* Email input */}
        </LoginInputContainer>
        <LoginInputContainer>
          { /* PasswprdInput */ }
        </LoginInputContainer>
        { /* button */}
        </LoginContent>
        </LoginContainer>
        </>
  )
}

export default LoginPage
