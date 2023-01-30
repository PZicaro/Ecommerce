/* eslint-disable react/no-children-prop */
import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/Header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.style'
import validator from 'validator'
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import CusttomInput from '../../components/custtom-input/custom-input.component'
import { useForm } from 'react-hook-form'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
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
          <CusttomInput hasError={!!errors?.email} placeholder='Digite seu Email' { ...register('email', { required: true, validate: (value) => validator.isEmail(value) }) }/>
        </LoginInputContainer>
        {errors?.email?.type === 'required' && (
          <InputErrorMessage>É necessário que você logue com seu email</InputErrorMessage>
        )
        }
        {errors?.email?.type === 'validate' && (
          <InputErrorMessage>insira um email válido</InputErrorMessage>
        )}
        <LoginInputContainer>
          <p>Senha:</p>
          <CusttomInput hasError={!!errors?.senha}placeholder='Digite sua senha' {...register('senha', { required: true })}/>
        </LoginInputContainer>
        {errors?.senha?.type === 'required' && (
          <InputErrorMessage>É necessário que você logue com sua senha :( </InputErrorMessage>
        )
        }

        <CustomButton startIcon = { <FiLogIn size={18}/> } onClick={ () => handleSubmit(handleSubmitPress)() }>Login</CustomButton>
        </LoginContent>

        </LoginContainer>
        </>
  )
}

export default LoginPage
