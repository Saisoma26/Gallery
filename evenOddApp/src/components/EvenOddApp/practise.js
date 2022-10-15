import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  randomcount = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const evenorodd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="back">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="countstate">Count is {evenorodd}</p>
          <button className="b" type="button" onClick={this.randomcount}>
            Increment
          </button>
          <p className="msg">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
