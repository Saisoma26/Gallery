import {Component} from 'react'

import './index.css'

const initialstate = {
  isrunning: false,
  timeelapsed: 0,
}

class Stopwatch extends Component {
  state = initialstate

  incrementtime = () => {
    const {isrunning} = this.state
    if (isrunning) {
      this.setState(prevState => ({timeelapsed: prevState.timeelapsed + 1}))
    }
  }

  start = () => {
    const {isrunning} = this.state
    if (isrunning === false) {
      const timerid = setInterval(this.incrementtime, 1000)
      this.setState({isrunning: true})
    }
  }

  stop = () => {
    clearInterval(this.timerid)
    this.setState({isrunning: false})
  }

  reset = () => {
    this.setState(initialstate)
  }

  gettime = () => {
    const {timeelapsed, isrunning} = this.state
    const minutes = timeelapsed / 60
    const secs = timeelapsed % 60
    const minsstring = minutes > 9 ? minutes : `0${minutes}`
    const secsstring = secs > 9 ? secs : `0${secs}`
    return `${minsstring}:${secsstring}`
  }

  render() {
    return (
      <div className="back">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
            className="image"
          />
          <p className="timerlabel">Timer</p>
          <p className="time-indicator">{this.gettime}</p>
          <div className="buttons-container">
            <button className="startbutton" type="button" onClick={this.start}>
              Start
            </button>
            <button className="stopbutton" type="button" onClick={this.stop}>
              Stop
            </button>
            <button className="resetbutton" type="button" onClick={this.start}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
