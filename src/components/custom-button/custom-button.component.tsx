import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from './custom-button.styles'

// Styles

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    startIcon?: React.ReactNode;
    children: React.ReactNode;
}
const CustomButton: FunctionComponent<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
  return (
    <CustomButtonContainer{...rest} >
        {startIcon && <IconContainer>{ startIcon }</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
