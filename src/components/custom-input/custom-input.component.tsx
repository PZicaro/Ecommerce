import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.style'
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}
// eslint-disable-next-line react/display-name
const CusttomInput:FunctionComponent<CustomInputProps> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ ref as any}/>
  }
)
export default CusttomInput
