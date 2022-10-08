import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBgContainer,
  LoginCard,
  LoginImage,
  LoginForm,
  Label,
  LoginInput,
  LoginParagraph,
  LoginButton,
  ShowPasswordContainer,
  LoginShowPasswordInput,
  ErrorParagraph,
} from './styledComponents'

import NxtWatchContext from '../../context/nxtWatchContext'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, loginErrorText: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    this.setState({loginErrorText: ''})
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const data = await fetch(url, options)
    const response = await data.json()

    if (data.status === 200) {
      const jwtToken = response.jwt_token
      this.onSubmitSuccess(jwtToken)
    } else {
      this.setState({loginErrorText: response.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPasswordCheckBox = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {username, password, loginErrorText, showPassword} = this.state
          return (
            <LoginBgContainer bgColor={isDark}>
              <LoginCard bgColor={isDark} boxShadow={isDark} textColor={isDark}>
                <LoginImage
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onSubmitLoginForm}>
                  <Label>
                    <LoginParagraph>USERNAME</LoginParagraph>
                    <LoginInput
                      type="text"
                      onChange={this.onChangeUsername}
                      value={username}
                      placeholder="Username"
                    />
                  </Label>
                  <Label>
                    <LoginParagraph>PASSWORD</LoginParagraph>
                    <LoginInput
                      type={showPassword ? 'text' : 'password'}
                      onChange={this.onChangePassword}
                      value={password}
                      placeholder="Password"
                    />
                  </Label>
                  <ShowPasswordContainer>
                    <LoginShowPasswordInput
                      type="checkbox"
                      onChange={this.onChangeShowPasswordCheckBox}
                    />
                    <LoginParagraph>Show Password</LoginParagraph>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {loginErrorText !== '' ? (
                    <ErrorParagraph>{`*${loginErrorText}`}</ErrorParagraph>
                  ) : null}
                </LoginForm>
              </LoginCard>
            </LoginBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
