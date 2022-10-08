import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import NxtWatchContext from './context/nxtWatchContext'

// Replace your code here
class App extends Component {
  state = {isDarkToggleValue: false}

  onChangeToggle = value => {
    // this.setState(prevState => ({isDark: !prevState.isDark}))
    this.setState({isDarkToggleValue: !value})
  }

  render() {
    const {isDarkToggleValue} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDark: isDarkToggleValue,
          changeThemeToggle: this.onChangeToggle,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          {/* <NotFound /> */}
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
// const App = () => <BrowserRouter></BrowserRouter>

export default App
