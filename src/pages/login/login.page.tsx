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
import CustomInput from '../../components/custom-input/custom-input.component'
import { useForm } from 'react-hook-form'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
const LoginPage = () => {
  interface LoginForm {
    email: string;
    senha: string;
  }
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginForm>()
  const handleSubmitPress = (data:LoginForm) => {
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
          <CustomInput hasError={!!errors?.email} placeholder='Digite seu Email' { ...register('email', { required: true, validate: (value) => validator.isEmail(value) }) }/>
        {errors?.email?.type === 'required' && (
          <InputErrorMessage>É necessário que você logue com seu email</InputErrorMessage>
        )
        }
        {errors?.email?.type === 'validate' && (
          <InputErrorMessage>insira um email válido</InputErrorMessage>
        )}
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Senha:</p>
          <CustomInput hasError={!!errors?.senha} type={'password'} placeholder='Digite sua senha' {...register('senha', { required: true })}/>
        {errors?.senha?.type === 'required' && (
          <InputErrorMessage>É necessário que você logue com sua senha :( </InputErrorMessage>
        )
        }
        </LoginInputContainer>

        <CustomButton startIcon = { <FiLogIn size={18}/> } onClick={ () => handleSubmit(handleSubmitPress)() }>Login</CustomButton>
        </LoginContent>

        </LoginContainer>
        </>
  )
}

export default LoginPage
