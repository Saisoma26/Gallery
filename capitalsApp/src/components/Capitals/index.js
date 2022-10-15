import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  selectoption = event => {
    const item = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    console.log(item[0].country)
    this.setState({country: item[0].country})
  }

  render() {
    const {country} = this.state

    return (
      <div className="back">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select onChange={this.selectoption}>
            <option value="NEW_DELHI" selected>
              {countryAndCapitalsList[0].capitalDisplayText}
            </option>
            <option value="LONDON">
              {countryAndCapitalsList[1].capitalDisplayText}
            </option>
            <option value="PARIS">
              {countryAndCapitalsList[2].capitalDisplayText}
            </option>
            <option value="KATHMANDU">
              {countryAndCapitalsList[3].capitalDisplayText}
            </option>
            <option value="HELSINKI">
              {countryAndCapitalsList[4].capitalDisplayText}
            </option>
          </select>
          <span className="p">is capital of which country?</span>
          <h2 className="countryname">{country}</h2>
        </div>
      </div>
    )
  }
}

export default Capitals
