import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderleftNavbar = () => {
        if (showLeftNavbar) {
          return (
            <div className="leftnavbar-bg">
              <h1 className="leftnavbar-menu-heading">Left Navbar Menu</h1>
              <ul className="menu">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
                <li className="list-item">Item 3</li>
                <li className="list-item">Item 4</li>
              </ul>
            </div>
          )
        }
        return null
      }

      const rendercontent = () => {
        if (showContent) {
          return (
            <div className="content-bg">
              <h1 className="content-heading">Content</h1>
              <p className="content">
                Lorem ipsum dolor sitamet,consectetur adipiscing elit, send do
                enumdksgdaj sjhsdi njsymdj bdjye .
              </p>
            </div>
          )
        }
        return null
      }

      const renderRightNavbar = () => {
        if (showRightNavbar) {
          return (
            <div className="rightNavbar-bg">
              <h1 className="right-navbar-heading">Right Navbar Menu</h1>
              <p className="btn" type="button">
                Ad 1
              </p>
              <p className="btn" type="button">
                Ad 2
              </p>
            </div>
          )
        }
        return null
      }

      return (
        <div className="body-bg">
          {renderleftNavbar()}
          {rendercontent()}
          {renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
