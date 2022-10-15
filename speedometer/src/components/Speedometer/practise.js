import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200
        ? {speed: prevState.speed + 10}
        : {speed: prevState.speed},
    )
  }

  brake = () => {
    this.setState(prevState =>
      prevState.speed > 0
        ? {speed: prevState.speed - 10}
        : {speed: prevState.speed},
    )
  }

  render() {
    const {speed} = this.state

    return (
      <div className="back">
        <h1 className="heading">SPEEDOMETER</h1>
        <img src="" className="image" alt="speedometer" />
        <h2 className="indicator">
          Speed is <span>{speed}mph</span>
        </h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button className="accelerate" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="brake" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
