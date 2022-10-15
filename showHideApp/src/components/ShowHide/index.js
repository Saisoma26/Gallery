import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {isshowHide1: false, isshowHide2: false}

  showhide1 = () => {
    this.setState(prevState => ({isshowHide1: !prevState.isshowHide1}))
  }

  showhide2 = () => {
    this.setState(prevState => ({isshowHide2: !prevState.isshowHide2}))
  }

  render() {
    const firstname = 'Joe'
    const lastname = 'Jonas'
    const {isshowHide1, isshowHide2} = this.state

    return (
      <div className="back">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="c">
            <button className="b" type="button" onClick={this.showhide1}>
              Show/Hide Firstname
            </button>
            {isshowHide1 ? <p className="card">{firstname}</p> : null}
          </div>
          <div className="c">
            <button className="b" type="button" onClick={this.showhide2}>
              Show/Hide Lastname
            </button>
            {isshowHide2 ? <p className="card">{lastname}</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
