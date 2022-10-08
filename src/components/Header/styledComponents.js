import styled from 'styled-components'
import {LoginImage} from '../Login/styledComponents'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  padding: 10px;
`

export const HeaderContainer = styled.div`
  display: flex;
`
export const HeaderImage = styled(LoginImage)`
  width: 120px;
`
export const Icon = styled(HeaderImage)`
  width: 50px;
`
export const CustomButton = styled.button`
  cursor: pointer;
  outline: none;
  border-width: 0;
  background-color: transparent;
  font-size: 24px;
`
export const HeaderProfileImage = styled(HeaderImage)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
  }
`
