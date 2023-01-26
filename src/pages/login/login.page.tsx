/* eslint-disable react/no-children-prop */
import CustomButton from '../../components/custon-button/custom-button.component'
import Header from '../../components/Header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.style'

import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import CusttomInput from '../../components/custtom-input/custom-input.component'
import { useForm } from 'react-hook-form'
const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const handleSubmitPress = (data:any) => {
    console.log({ data })
  }

  return (
        <>
        <Header/>
        <LoginContainer>

        <LoginContent>

          <LoginHeadline>Entre Com Sua Conta</LoginHeadline>
          <CustomButton startIcon={ <BsGoogle size={18}/> }>Entrar com o Google</CustomButton>
        <LoginSubtitle>ou entre com sua conta</LoginSubtitle>

        <LoginInputContainer >
          <p>Email:</p>
          <CusttomInput hasError={!!errors?.email} placeholder='Digite seu Email' { ...register('email', { required: true }) }/>
        </LoginInputContainer>

        <LoginInputContainer>
          <p>Senha:</p>
          <CusttomInput hasError={!!errors?.senha}placeholder='Digite sua senha' {...register('senha', { required: true })}/>
        </LoginInputContainer>

        <CustomButton startIcon = { <FiLogIn size={18}/> } onClick={ () => handleSubmit(handleSubmitPress)() }>Login</CustomButton>
        </LoginContent>

        </LoginContainer>
        </>
  )
}

export default LoginPage
