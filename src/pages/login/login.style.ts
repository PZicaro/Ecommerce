import styled from 'styled-components'
import colors from '../../theme/theme.colors'

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${colors.text.dark};
`

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`

export const LoginSubtitle = styled.p`
  color: ${colors.text.dark};
  padding-bottom: 20px;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
`

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`
