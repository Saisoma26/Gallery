import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  state = {isshow: false}

  toggleshownhide = () => {
    this.setState(prevState => ({isshow: !prevState.isshow}))
  }

  clsname = () => {
    const {isshow} = this.state
    if (isshow) {
      return 'showans'
    }
    return 'hideans'
  }

  showorhideimg = () => {
    const {isshow} = this.state
    if (isshow) {
      return 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    }
    return 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  }

  alttext = () => {
    const {isshow} = this.state
    if (isshow) {
      return 'minus'
    }
    return 'plus'
  }

  renderanstext = () => {
    const {isshow} = this.state
    const {itemdetails} = this.props
    if (isshow) {
      return (
        <>
          <hr className="hr" />
          <p className="anstext">{itemdetails.answerText}</p>
        </>
      )
    }
    return null
  }

  render() {
    console.log('renndered')
    const {itemdetails} = this.props
    const isshow = this.state

    console.log(isshow)
    return (
      <li className="listitem">
        <div className="queline">
          <h1 className="heading1">{itemdetails.questionText}</h1>
          <button
            className="b"
            type="button"
            testid={itemdetails.id}
            onClick={this.toggleshownhide}
          >
            <img
              src={this.showorhideimg()}
              alt={this.alttext()}
              className="buttonimg"
            />
          </button>
        </div>
        <div className="showans">{this.renderanstext()}</div>
      </li>
    )
  }
}
export default FaqItem
