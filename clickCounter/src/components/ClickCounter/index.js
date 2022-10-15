import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="back">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="b" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
