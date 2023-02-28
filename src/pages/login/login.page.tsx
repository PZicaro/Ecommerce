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
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider, db } from '../../config/firebase.config'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
const LoginPage = () => {
  interface LoginForm {
    email: string;
    password: string;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<LoginForm>()
  const handleSubmitPress = async (data:LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password)
      console.log(userCredentials)
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'invalidPassword' })
      }
      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' })
      }
    }
  }
  const handleSignGooglePress = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider)
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', userCredentials.user.uid)))
      const user = querySnapshot.docs[0]?.data()
      console.log({ userCredentials })
      console.log({ user })
      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const surname = userCredentials.user.displayName?.split(' ')[1]
        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.uid,
          firstName,
          surname,
          provider: 'google'
        })
      }
      console.log({ user })
    } catch (error) {
      console.log(error)
    }
  }
  return (
        <>
        <Header/>
        <LoginContainer>

        <LoginContent>

          <LoginHeadline>Entre Com Sua Conta</LoginHeadline>
          <CustomButton startIcon={ <BsGoogle size={18}/> }onClick={handleSignGooglePress}>Entrar com o Google</CustomButton>
        <LoginSubtitle>ou entre com sua conta</LoginSubtitle>

        <LoginInputContainer >
          <p>Email:</p>
          <CustomInput hasError={!!errors?.email}
          placeholder='Digite seu Email'
          { ...register('email', { required: true, validate: (value) => validator.isEmail(value) }) }/>
        {
        errors?.email?.type === 'required' && (
          <InputErrorMessage>É necessário que você logue com seu email</InputErrorMessage>
        )
        }
        {
        errors?.email?.type === 'validate' && (
          <InputErrorMessage>insira um email válido</InputErrorMessage>
        )}
       { errors?.email?.type === 'notFound' && (
          <InputErrorMessage>Ops... aparentemente esse email não existe</InputErrorMessage>
       )}
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Senha:</p>
          <CustomInput
          hasError={!!errors?.password}
          type={'password'}
          placeholder='Digite sua senha'
         {...register('password', { required: true })}/>
         {errors?.password?.type === 'required' && (
          <InputErrorMessage>É necessário que você logue com sua senha :( </InputErrorMessage>
         )
        }
         {errors?.password?.type === 'invalidPassword' && (
          <InputErrorMessage>A senha esta incorreta :( </InputErrorMessage>
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
