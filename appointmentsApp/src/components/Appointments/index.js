import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appiontments extends Component {
  state = {title: '', date: '', list: []}

  additem = () => {
    const {title, date} = this.state
    const item = {
      id: uuidv4(),
      title,
      date,
      isfavourite: false,
    }
    this.setState(prevState => ({
      title: '',
      date: '',
      list: [...prevState.list, item],
    }))
  }

  like = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each => {
        if (each.id === id) {
          const eachitem = {
            ...each,
            isfavourite: true,
          }
          return eachitem
        }
        return each
      }),
    }))
  }

  titlechange = e => {
    this.setState({title: e.target.value})
  }

  datechange = e => {
    this.setState({date: e.target.value})
  }

  render() {
    const {title, date, list} = this.state

    return (
      <div className="back">
        <div className="card">
          <div className="container">
            <div className="left-container">
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                value={title}
                type="text"
                className="inputel"
                placeholder="Title"
                onChange={this.titlechange}
              />
              <label htmlFor="date" className="label">
                Date
              </label>
              <input
                id="date"
                value={date}
                type="date"
                className="inputel"
                placeholder="dd/mm/yyyy"
                onChange={this.datechange}
              />
              <button className="b" type="button" onClick={this.additem}>
                Add
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <h2 className="subheading">Appoiintments</h2>
          <ul className="list-container">
            {list.map(each => (
              <AppointmentItem
                itemDetails={each}
                favouritefunc={this.like}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appiontments
