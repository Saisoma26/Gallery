import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {timelimit: 25, isstart: false}

  onStart = () => {
    this.setState({isstart: true})
  }

  decrement = () => {
    this.setState(prevState => ({timelimit: prevState.timelimit - 1}))
  }

  increment = () => {
    this.setState(prevState => ({timelimit: prevState.timelimit + 1}))
  }

  render() {
    const {timelimit, isstart} = this.start
    const time = timelimit
    const isstarttext = isstart ? 'start' : 'pause'
    const starticon = isstart
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const starticonalt = isstart ? 'pause icon' : 'play icon'
    const timerstate = isstart ? 'Running' : 'Paused'
    return (
      <div className="back">
        <h1 className="heading">Digital Timer</h1>
        <div className="container">
          <div className="timer-container">
            <div className="inner-circle">
              <p className="time">{time}</p>
              <p className="state">{timerstate}</p>
            </div>
          </div>
          <div className="side-container">
            <div>
              <img src={starticon} alt={starticonalt} className="startimage" />
              <p className="label" onClick={this.onStart}>
                {isstarttext}
              </p>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="startimage"
              />
              <p className="label" onClick={this.onReset}>
                Reset
              </p>
            </div>
            <p className="text">Set Timer Limit</p>
            <div className="timerbutton">
              <img
                src=""
                alt=""
                className="incredecrebutton"
                onClick={this.decrement}
              />
              <p className="timeindicator">{timelimit}</p>
              <img
                src=""
                alt=""
                className="incredecrebutton"
                onClick={this.increment}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
