import './index.css'

const Header = () => (
  <div className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nav-logo"
    />
    <ul className="options-container">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">Cart</li>
      <li className="logout-btn" type="button">
        Logout
      </li>
    </ul>
  </div>
)

export default Header
