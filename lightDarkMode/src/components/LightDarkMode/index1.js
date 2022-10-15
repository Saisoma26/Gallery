import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isclicked: false, buttontext: 'Light Mode', color: 'black'}

  click = () => {
    const {isclicked} = this.state

    if (isclicked) {
      this.setState(() => ({
        isclicked: false,
        buttontext: 'Dark Mode',
        color: 'white',
        headingcolor: 'blacktext',
      }))
    } else {
      this.setState(() => ({
        isclicked: true,
        buttontext: 'Light Mode',
        color: 'black',
        headingcolor: 'whitetext',
      }))
    }
  }

  render() {
    const {buttontext, color, headingcolor} = this.state
    return (
      <div className="back">
        <div className={color}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="b" type="button" onClick={this.click}>
            {buttontext}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
