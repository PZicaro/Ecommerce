
import { InputErrorMessageContainer } from './input-error-message.style'
// eslint-disable-next-line import/no-duplicates
import React, { FunctionComponent } from 'react'
interface InputErrorMessageProps {
    children?: React.ReactNode
}
const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({ children }) => {
  return (
    <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
  )
}
export default InputErrorMessage
