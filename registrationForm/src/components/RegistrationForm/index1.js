import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    issubmitted: false,
    firstname: '',
    lastname: '',
    frstnameErr: '',
    lastnameErr: '',
  }

  onSubmitform = () => {
    const {firstname, lastname} = this.state
    if (firstname === '') {
      if (lastname === '') {
        this.setState({frstnameErr: 'Required', lastnameErr: 'Required'})
      } else {
        this.setState({frstnameErr: 'Required'})
      }
    } else if (lastname === '') {
      this.setState({lastnameErr: 'Required'})
    } else {
      this.setState({
        issubmitted: true,
        frstnameErr: '',
        lastnameErr: '',
      })
    }
  }

  onBlurFrstname = event => {
    if (event.target.value === '') {
      this.setState({frstnameErr: 'Required', firstname: ''})
    } else {
      this.setState({firstname: event.target.value, frstnameErr: ''})
    }
  }

  onBlurLastname = event => {
    if (event.target.value === '') {
      this.setState({lastnameErr: 'Required', lastname: ''})
    } else {
      this.setState({lastname: event.target.value, lastnameErr: ''})
    }
  }

  submitanotherresponse = () => {
    this.setState({
      issubmitted: false,
      firstname: '',
      lastname: '',
      frstnameErr: '',
      lastnameErr: '',
    })
  }

  onSubmitCard = () => (
    <div className="submit-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="submit-text">Submitted Successfully</p>
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
    const {frstnameErr, lastnameErr} = this.state
    return (
      <div className="login-card">
        <label className="label" htmlFor="fname">
          FIRST NAME
        </label>
        <input
          className="inputel"
          id="fname"
          type="text"
          onBlur={this.onBlurFrstname}
          placeholder="First Name"
        />
        <p className="error-msg">{frstnameErr}</p>
        <label className="label" htmlFor="lname">
          LAST NAME
        </label>
        <input
          className="inputel"
          id="lname"
          type="text"
          onBlur={this.onBlurLastname}
          placeholder="Last Name"
        />
        <p className="error-msg">{lastnameErr}</p>
        <button className="btn" type="button" onClick={this.onSubmitform}>
          Submit
        </button>
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
