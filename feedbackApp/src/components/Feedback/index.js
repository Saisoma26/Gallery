import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isfeedbackgiven: false}

  feedback = () => {
    this.setState({isfeedbackgiven: true})
  }

  render() {
    const {isfeedbackgiven} = this.state
    const {resources} = this.props
    const {emojis} = resources
    let show
    let hide
    const feedbackcard = isfeedbackgiven ? show : hide
    const thankyoucard = !isfeedbackgiven ? show : hide

    return (
      <div className="back">
        <div className={feedbackcard}>
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji-container">
            <li className="listitem">
              <>
                <img
                  src={emojis[0].imageUrl}
                  className="emoji"
                  onClick={this.feedback}
                />
                <p className="name">{emojis[0].name}</p>
              </>
            </li>
            <li className="listitem">
              <>
                <img
                  src={emojis[1].imageUrl}
                  className="emoji"
                  onClick={this.feedback}
                />
                <p className="name">{emojis[1].name}</p>
              </>
            </li>
            <li className="listitem">
              <>
                <img
                  src={emojis[2].imageUrl}
                  className="emoji"
                  onClick={this.feedback}
                />
                <p className="name">{emojis[2].name}</p>
              </>
            </li>
          </ul>
        </div>
        <div className={thankyoucard}>
          <img src={resources.loveEmojiUrl} className="loveemoji" />
          <h1 className="heading1">Thank You!</h1>
          <p className="thankdescription">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
