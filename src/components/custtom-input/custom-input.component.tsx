import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custtom-input.style'
interface CusttomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}
// eslint-disable-next-line react/display-name
const CusttomInput:FunctionComponent<CusttomInputProps> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ ref as any}/>
  }
)
export default CusttomInput
