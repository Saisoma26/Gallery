import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headscount: 0,
    tailscount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  toss = () => {
    const tossresult = Math.floor(Math.random() * 2)
    const h = tossresult === 0 ? 1 : 0
    const t = tossresult === 1 ? 1 : 0
    const imageurl =
      tossresult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    this.setState(prevState => ({
      headscount: prevState.headscount + h,
      tailscount: prevState.tailscount + t,
      imageUrl: imageurl,
    }))
    console.log(tossresult)
  }

  render() {
    const {headscount, tailscount, imageUrl} = this.state
    const total = headscount + tailscount

    return (
      <div className="back">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="p">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button className="b" type="button" onClick={this.toss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="displaycount">total:{total}</p>
            <p className="displaycount">heads:{headscount}</p>
            <p className="displaycount">tails:{tailscount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
