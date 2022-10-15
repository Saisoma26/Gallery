import {Component} from 'react'

import Login from '../Login/login1'

import Logout from '../Logout/logout1'

import Message from '../Message/message1'

import './index.css'

class Home extends Component {
  state = {islogin: false}

  loginandout = () => {
    this.setState(prevState => ({islogin: !prevState.islogin}))
  }

  render() {
    const {islogin} = this.state
    const text = islogin ? 'Welcome User' : 'Please Login'
    return (
      <div className="back">
        <div className="card">
          <Message text={text} />
          {!islogin && <Login login={this.loginandout} />}
          {islogin && <Logout logout={this.loginandout} />}
        </div>
      </div>
    )
  }
}

export default Home
