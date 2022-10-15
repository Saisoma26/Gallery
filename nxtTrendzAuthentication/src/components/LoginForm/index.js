import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errMsg: '', isshow: false}

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errmsg => {
    this.setState({errMsg: errmsg, isshow: true})
  }

  submitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password, errMsg, isshow} = this.state
    return (
      <div className="back">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="input-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-image"
          />
          <form className="formel" onSubmit={this.submitLogin}>
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              className="inputel"
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
            />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="inputel"
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
            <button type="submit" className="b">
              Login
            </button>
          </form>
          {isshow && <p className="error-msg">{errMsg}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm
