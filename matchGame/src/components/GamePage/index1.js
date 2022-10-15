import {Component} from 'react'

import './index.css'

import TabItems from '../TabItems'
import ImageItems from '../ImageItems'

const activeitem1 = {
  id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
  imageUrl:
    'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
  thumbnailUrl:
    'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
  category: 'FRUIT',
}

const initialstate = {
  activetabid: 'FRUIT',
  activeitem: activeitem1,
  score: 0,
  time: 60,
  isgameactive: true,
}

class GamePage extends Component {
  state = initialstate

  choosetab = tabId => {
    this.setState({activetabid: tabId})
  }

  resetgame = () => {
    this.setState(initialstate)
  }

  selectimage = imageId => {
    const {activeitem} = this.state
    const {thumbnailsList} = this.props
    if (imageId === activeitem.id) {
      const randomImage =
        thumbnailsList[Math.floor(Math.random() * thumbnailsList.length)]
      this.setState(prevState => ({
        score: prevState.score + 1,
        activeitem: randomImage,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isgameactive: false})
    }
  }

  rendergame = () => {
    const {isgameactive, activeitem, activetabid} = this.state
    const {tabsList, thumbnailsList} = this.props

    const updatelist = thumbnailsList.filter(
      each => each.category === activetabid,
    )

    if (isgameactive) {
      return (
        <div className="back">
          <img src={activeitem.imageUrl} alt="match" className="displayImage" />
          <ul className="tabitems">
            {tabsList.map(each => (
              <TabItems
                itemDetails={each}
                key={each.tabId}
                onclickfunc={this.choosetab}
                isactive={each.tabId === activetabid}
              />
            ))}
          </ul>
          <ul className="imageitems">
            {updatelist.map(each => (
              <ImageItems
                key={each.id}
                itemDetails={each}
                onclickfunc={this.selectimage}
              />
            ))}
          </ul>
        </div>
      )
    }
    return null
  }

  renderscorecard = () => {
    const {score, isgameactive} = this.state
    if (!isgameactive) {
      return (
        <div className="scorecard-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            className="tropyimage"
            alt="trophy"
          />
          <p className="yourscore">YOUR SCORE</p>
          <p className="dispalyscore">{score}</p>
          <button
            className="playagainbutton"
            onClick={this.resetgame}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="resetimg"
            />
            Play Again
          </button>
        </div>
      )
    }
    return null
  }

  countdown = () => {
    const {time} = this.state
    if (time > 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({isgameactive: false, time: 0})
    }
  }

  gettime = () => {
    const {time} = this.state
    const minstring = `${time} secs`
    return minstring
  }

  render() {
    const {score, time} = this.state
    if (time === 60) {
      this.timerId = setInterval(this.countdown, 1000)
    }

    return (
      <ul>
        <li>
          <div className="nav-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="logo"
            />
            <div className="timerAndScore">
              <p className="scoretag"> Score: </p>
              <p className="score">{score}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer"
              />
              <p className="timercountdown">{this.gettime()}</p>
            </div>
          </div>
        </li>
        <li>{this.rendergame()}</li>
        <li>{this.renderscorecard()}</li>
      </ul>
    )
  }
}
export default GamePage
