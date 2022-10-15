import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  incrementMango = () => {
    this.setState(prevState => ({
      mangocount: prevState.mangocount + 1,
      bananacount: prevState.bananacount,
    }))
  }

  incrementBanana = () => {
    this.setState(prevState => ({
      mangocount: prevState.mangocount,
      bananacount: prevState.bananacount + 1,
    }))
  }

  render() {
    const {mangocount, bananacount} = this.state
    return (
      <div className="back">
        <div className="outercard">
          <h1 className="heading">
            Bob ate <span className="spanel">{mangocount}</span> mangoes
            <span className="spanel"> {bananacount}</span> bananas
          </h1>
          <div className="cards-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button className="b" type="button" onClick={this.incrementMango}>
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https:assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="b"
                type="button"
                onClick={this.incrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
