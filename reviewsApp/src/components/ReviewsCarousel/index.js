import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeprofile: 0}

  navigateleft = () => {
    const {activeprofile} = this.state
    if (activeprofile !== 0) {
      this.setState(prevState => ({activeprofile: prevState.activeprofile - 1}))
    }
  }

  navigateright = () => {
    const {activeprofile} = this.state
    if (activeprofile !== 3) {
      this.setState(prevState => ({activeprofile: prevState.activeprofile + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeprofile} = this.state
    const {imgUrl, username, description, companyName} = reviewsList[
      activeprofile
    ]

    return (
      <div className="back">
        <div className="card">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="image" />
          <div className="carousel">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
              onClick={this.navigateleft}
            />
            <p className="username">{username}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
              onClick={this.navigateright}
            />
          </div>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
