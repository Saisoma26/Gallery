import {Component} from 'react'
import './index.css'

const initialstate = {
  issubmitted: false,
  firstname: '',
  lastname: '',
  frstnameErr: 'hide',
  lastnameErr: 'hide',
}

class RegistrationForm extends Component {
  state = initialstate

  onSubmitform = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname === '') {
      this.setState({frstnameErr: 'show'})
    }
    if (lastname === '') {
      this.setState({lastnameErr: 'show'})
    }
    if (firstname !== undefined && lastname !== undefined) {
      this.setState({
        issubmitted: true,
        frstnameErr: 'hide',
        lastnameErr: 'hide',
      })
    }
  }

  onBlurFrstname = event => {
    if (event.target.value === '') {
      this.setState({frstnameErr: 'show'})
    } else {
      this.setState({firstname: event.target.value, frstnameErr: 'hide'})
    }
  }

  onBlurLastname = event => {
    if (event.target.value === '') {
      this.setState({lastnameErr: 'show'})
    } else {
      this.setState({lastname: event.target.value, lastnameErr: 'hide'})
    }
  }

  submitanotherresponse = () => {
    this.setState({initialstate})
  }

  onSubmitCard = () => (
    <div className="submit-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <h1 className="submit-text">Submitted Successfully</h1>
      <button
        className="btn"
        type="button"
        onClick={this.submitanotherresponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderLoginForm = () => {
    const {firstname, lastname, frstnameErr, lastnameErr} = this.state
    return (
      <div className="login-card">
        <form className="form-container">
          <label className="label" htmlFor="fname">
            FIRST NAME
          </label>
          <input
            className="inputel"
            id="fname"
            type="text"
            onBlur={this.onBlurFrstname}
            value={firstname}
            placeholder="First Name"
          />
          <p className={frstnameErr}>Required</p>
          <label className="label" htmlFor="lname">
            LAST NAME
          </label>
          <input
            className="inputel"
            id="lname"
            type="text"
            onBlur={this.onBlurLastname}
            value={lastname}
            placeholder="Last Name"
          />
          <button className="btn" type="submit">
            Submit
          </button>
          <p className={lastnameErr}>Required</p>
        </form>
      </div>
    )
  }

  render() {
    const {issubmitted} = this.state

    return (
      <div className="back">
        <h1 className="heading">Registration</h1>
        {!issubmitted && this.renderLoginForm()}
        {issubmitted && this.onSubmitCard()}
      </div>
    )
  }
}

export default RegistrationForm
