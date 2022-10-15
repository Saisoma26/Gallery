import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import DetailsItem from '../DetailsItem'

class DetailsPage extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    list: [],
    isshow: false,
    searchInput: '',
  }

  onwebsiteChange = e => {
    this.setState({website: e.target.value})
  }

  onusernameChange = e => {
    this.setState({username: e.target.value})
  }

  onpasswordChange = e => {
    this.setState({password: e.target.value})
  }

  onAddnewitem = () => {
    const {website, username, password} = this.state
    const item = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      list: [...prevState.list, item],
      website: '',
      username: '',
      password: '',
    }))
  }

  deleteitem = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(each => each.id !== id),
    }))
  }

  renderimage = () => {
    const {list} = this.state
    if (list.length === 0) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="nopasswords-image"
        />
      )
    }
    return null
  }

  passwordscheck = () => {
    const {list} = this.state
    if (list.length === 0) {
      return 'No Passwords'
    }
    return null
  }

  searchelement = event => {
    const searchvalue = event.target.value
    this.setState({searchInput: searchvalue})
  }

  render() {
    const {website, username, password, list, isshow, searchInput} = this.state
    console.log(list)
   
    return (
      <div className="back">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="up-container">
          <div className="input-container">
            <h1 className="heading">Add New Password</h1>
            <form className="formel">
              <div className="each-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="icons"
                  alt="website"
                />
                <input
                  className="inputel"
                  value={website}
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onwebsiteChange}
                />
              </div>
              <div className="each-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="icons"
                  alt="username"
                />
                <input
                  className="inputel"
                  value={username}
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onusernameChange}
                />
              </div>
              <div className="each-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="icons"
                  alt="password"
                />
                <input
                  className="inputel"
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onpasswordChange}
                />
              </div>
              <button className="b" type="button" onClick={this.onAddnewitem}>
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="pmimage"
          />
        </div>
        <div className="down-container">
          <div className="navbar">
            <h1 className="navtext">Your Passwords</h1>
            <p className="count">{list.length}</p>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="searchicon"
              />
              <input
                value={searchInput}
                className="search-input"
                type="search"
                placeholder="Search"
                onChange={this.searchelement}
              />
            </div>
          </div>
          <hr className="hr" />
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="label">
            Show passwords
          </label>
          <ul className="list-container">
            {updatelist.map(each => (
              <DetailsItem
                itemdetails={each}
                key={each.id}
                deletefunc={this.deleteitem}
                isshow={isshow}
              />
            ))}
          </ul>
          {this.renderimage()}
          <p className="nopasswordstextcontent">{this.passwordscheck()}</p>
        </div>
      </div>
    )
  }
}

export default DetailsPage
