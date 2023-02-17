import { FiLogIn } from 'react-icons/fi'
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/Header/header.component'
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from './sign-up.style'
import { useForm } from 'react-hook-form'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
import { InputErrorMessageContainer } from '../../components/input-error-message/input-error-message.style'
import validator from 'validator'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

interface SignUpForm{
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmation: string;
}
const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm<SignUpForm>()
  const watchPassword = watch('password')

  const handleSubmitPress = async (data:SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)
      console.log(userCredentials)
      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.name,
        surName: data.surname

      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Header/>
    <SignUpContainer>
        <SignUpContent>
            <SignUpHeadline>Crie Sua conta</SignUpHeadline>
            <SignUpInputContainer>
                <p>Nome:</p>
                <CustomInput hasError={!!errors?.name}
                {...register('name', { required: true })}
                placeholder='Digite seu nome'/>
                {errors?.name?.type === 'required' && (
                  <InputErrorMessage>É necessário que você coloque seu nome</InputErrorMessage>
                )
                }
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Sobrenome:</p>
                <CustomInput hasError={!!errors?.surname}
                {...register('surname', { required: true })}
                placeholder='Digite seu sobrenome'/>
            {errors?.surname?.type === 'required' && (
              <InputErrorMessageContainer>É necessário que você digite seu sobrenome</InputErrorMessageContainer>
            )}
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Email:</p>
                <CustomInput hasError={!!errors.email}
                {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                placeholder='Digite seu email'/>
                {errors?.email?.type === 'required' && (
                  <InputErrorMessage>É necessário que você digite seu email</InputErrorMessage>
                )}
                {errors?.email?.type === 'validate' && (
                  <InputErrorMessage>Coloque um email válido</InputErrorMessage>
                )}
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Senha:</p>
                <CustomInput hasError={!!errors.password}
                {...register('password', { required: true })}
                placeholder='Digite sua senha' type={'password'}/>
           {errors?.password?.type === 'required' && (
            <InputErrorMessage>É necessário que você digite uma senha</InputErrorMessage>
           )}
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Confirme sua senha:</p>
                <CustomInput hasError={!!errors.confirmation}
                {...register('confirmation', { required: true, validate: (value) => { return value === watchPassword } })
                }placeholder='Digite sua senha novamente' type={'password'}/>
            {errors?.confirmation?.type === 'required' && (
              <InputErrorMessage>É necessário que você digite sua senha novamente</InputErrorMessage>
            )}
            {errors?.confirmation?.type === 'validate' && (
              <InputErrorMessage>A confirmação de senha deve ser igual a senha</InputErrorMessage>
            )
            }
            </SignUpInputContainer>
            <CustomButton startIcon={<FiLogIn size={18}/>} onClick={ () => { handleSubmit(handleSubmitPress)() }}>Criar Conta</CustomButton>

        </SignUpContent>
    </SignUpContainer>
    </>
  )
}
export default SignUpPage
