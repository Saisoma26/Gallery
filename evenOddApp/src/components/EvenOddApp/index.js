import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, evenorodd: 'Even'}

  randomcount = () => {
    let k = Math.floor(Math.random() * 101)
    if (k % 2 == 0) {
      this.setState(() => ({count: `${k}`, evenorodd: 'Even'}))
    } else {
      this.setState(() => ({count: `${k}`, evenorodd: 'Odd'}))
    }
  }

  render() {
    const {count, evenoradd} = this.state
    return (
      <div className="back">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="countstate">Count is {evenorodd}</p>
          <button className="b" type="button" onClick={this.randomcount}>
            Increment
          </button>
          <p className="msg">*Increment By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
