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
      this.timerid = setInterval(this.incrementtime, 1000)
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
    const {timeelapsed} = this.state
    const minutes = Math.floor(timeelapsed / 60)
    const secs = Math.floor(timeelapsed % 60)
    const minsstring = minutes > 9 ? minutes : `0${minutes}`
    const secsstring = secs > 9 ? secs : `0${secs}`
    console.log(`${minsstring}:${secsstring}`)
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
          <h1 className="time-indicator">{this.gettime()}</h1>
          <div className="buttons-container">
            <button className="startbutton" type="button" onClick={this.start}>
              Start
            </button>
            <button className="stopbutton" type="button" onClick={this.stop}>
              Stop
            </button>
            <button className="resetbutton" type="button" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
