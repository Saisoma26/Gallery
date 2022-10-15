import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updatesearchInput = value => {
    this.setState({searchInput: value})
  }

  onchangeupdate = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const updatelist = suggestionsList.filter(each =>
      each.suggestion.tolower().includes(searchInput),
    )

    return (
      <div className="back">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="card-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="seachicon"
            />
            <input
              type="search"
              value={searchInput}
              placeholder="Search Google"
            />
          </div>
          <ul className="inputs">
            {updatelist.map(each => (
              <SuggestionItem
                itemDetails={each}
                key={each.id}
                updatefunct={this.updatesearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
