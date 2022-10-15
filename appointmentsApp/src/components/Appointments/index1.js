import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', list: [], isstarred: false}

  additem = event => {
    event.preventDefault()
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

  starreditems = () => {
    this.setState(prevState => ({isstarred: !prevState.isstarred}))
  }

  titlechange = e => {
    this.setState({title: e.target.value})
  }

  datechange = e => {
    this.setState({date: e.target.value})
  }

  render() {
    const {title, date, list, isstarred} = this.state
    const buttoncls = isstarred ? 'activeButton' : 'inactiveButton'
    const updatelist1 = list.filter(each => each.isfavourite === true)
    const updatelist = isstarred ? updatelist1 : list
    return (
      <div className="back">
        <div className="card">
          <div className="container">
            <div className="left-container">
              <h1 className="heading">Add Appointment</h1>
              <form className="form" onSubmit={this.additem}>
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
                <button className="addbutton" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointmentimg"
              />
            </div>
          </div>
          <hr />
          <div className="below-container">
            <h2 className="subheading">Appointments</h2>
            <button className={buttoncls} onClick={this.starreditems}>
              Starred
            </button>
          </div>
          <ul className="list-container">
            {updatelist.map(each => (
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

export default Appointments
