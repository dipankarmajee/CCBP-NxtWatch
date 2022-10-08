import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'

import Cookies from 'js-cookie'

import './index.css'

import {
  NavbarContainer,
  HeaderContainer,
  HeaderImage,
  Icon,
  CustomButton,
  HeaderProfileImage,
} from './styledComponents'

import NxtWatchContext from '../../context/nxtWatchContext'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, changeThemeToggle} = value
      const activeTheme = isDark ? 'dark-mode' : 'ligth-mode'
      const activeLigthThemeIcon = isDark ? 'active-dark-mode-icon' : null
      const onClickLogoutButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const onClickDarkModeToggle = () => {
        changeThemeToggle(isDark)
      }

      return (
        <NavbarContainer className={activeTheme}>
          <HeaderContainer>
            <Link to="/" className="nav-link nav-link-style">
              <HeaderImage
                className="nav-link-style"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
          </HeaderContainer>
          <HeaderContainer className="header-container">
            <CustomButton onClick={onClickDarkModeToggle}>
              {isDark ? (
                <BsBrightnessHigh className="dark-mode-icon active-dark-mode-icon" />
              ) : (
                <BsMoon className="dark-mode-icon" />
              )}
            </CustomButton>

            <CustomButton>
              <GiHamburgerMenu
                className={`display-sm ${activeLigthThemeIcon}`}
              />
              <img
                className="profile-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
            </CustomButton>

            <CustomButton onClick={onClickLogoutButton}>
              <FiLogOut className={`display-sm ${activeLigthThemeIcon}`} />
            </CustomButton>
            <button
              className="logout-button"
              type="button"
              onClick={onClickLogoutButton}
            >
              Logout
            </button>
          </HeaderContainer>
        </NavbarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
