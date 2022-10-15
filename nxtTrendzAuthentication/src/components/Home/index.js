import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-inner-container">
      <div className="text-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a maker of the era and
          we are in a revolution . Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          your own way
        </p>
        <button className="shownowbutton" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="home-boy-image"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
