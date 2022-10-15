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

const initalstate = {
  activetabid: 'FRUIT',
  activeitem: activeitem1,
  score: 0,
  time: 60,
  isgameactive: true,
}

class GamePage extends Component {
  state = {
    activetabid: '',
    activeitem: '',
    score: 0,
    time: 60,
    isgameactive: true,
  }

  countdownfunc = () => {
    const {time} = this.state
    if (time !== 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({isgameactive: false})
    }
  }

  choosetab = tabId => {
    this.setState({activetabid: tabId})
  }

  resetgame = () => {
    this.setState({initalstate})
  }

  selectimage = imageId => {
    const {activeitem} = this.state
    const {imagesList} = this.props
    if (imageId === activeitem.id) {
      const randomImage =
        imagesList[Math.floor(Math.random() * imagesList.length)]
      this.setState(prevState => ({
        score: prevState + 1,
        activeitem: randomImage,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isgameactive: false})
    }
  }

  rendergame = () => {
    const {
      tabsList,
      imagesList,
      isgameactive,
      activeitem,
      activetabid,
    } = this.props

    const updatelist = imagesList.filter(each => each.category === activetabid)

    if (isgameactive) {
      return (
        <div className="back">
          <img
            src={activeitem.imageUrl}
            alt="active"
            className="displayImage"
          />
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
                key={each.appId}
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
          <h1 className="yourscore">YOUR SCORE</h1>
          <p className="dispalyscore">{score}</p>
          <button className="playagainbutton" onClick={this.resetgame}>
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

  render() {
    const {activetabid, score, time} = this.state
    const timerId = setInterval(this.countdownfunc, 1000)
    return (<div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <div className="timerAndScore">
        <p className="scoretag">
          Score <span className="score">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />
        <p className="timercountdown">{time}</p>
      </div>
    </div>)(this.rendergame())(this.renderscorecard())
  }
}
export default GamePage
