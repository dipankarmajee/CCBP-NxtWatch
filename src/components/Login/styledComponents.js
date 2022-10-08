import styled from 'styled-components'

export const ShowPasswordContainer = styled.div`
  display: flex;
`

export const LoginBgContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  min-height: 100vh;
`

export const LoginCard = styled(LoginBgContainer)`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.textColor ? '#f9f9f9' : '#0f0f0f')};
  min-height: fit-content;
  box-shadow: ${props =>
    props.boxShadow === false ? '0 4px 16px 0 #bfbfbf' : null};
  padding: 20px;
  border-radius: 4px;
  width: 90vw;
  height: 60vh;
  @media (min-width: 768px) {
    width: 40vw;
  }
`

export const LoginImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`
export const LoginForm = styled.form`
  width: 100%;
`

export const Label = styled.label`
  margin-bottom: 10px;
  width: 100%;
`

export const LoginParagraph = styled.p`
  font-weight: 500;
  width: 100%;
`

export const LoginInput = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  outline: none;
  width: 100%;
`
export const LoginButton = styled.button`
  cursor: pointer;
  outline: none;
  border-width: 0;
  width: 100%;
  background-color: #4f46e5;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
`

export const LoginShowPasswordInput = styled(LoginInput)`
  width: fit-content;
`
export const ErrorParagraph = styled(LoginParagraph)`
  font-size: 14px;
  color: red;
`
