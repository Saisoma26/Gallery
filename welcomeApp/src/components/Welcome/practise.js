import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {issubscribed: true, text: 'Subscribe'}

  click = () => {
    const {issubscribed} = this.state

    if (issubscribed === true) {
      this.setState(() => ({issubscribed: false, text: 'Subscribed'}))
    } else {
      this.setState(() => ({issubscribed: true, text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state

    return (
      <div className="back">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you Happy Learning</p>
        <button className="b" type="button" onClick={this.click}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
