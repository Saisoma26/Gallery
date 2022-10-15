import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const initialpage = () => (
    <div className="container">
      <p className="initial-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const yetToRegisterPage = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="ytr-image"
      />
      <p className="ytr-description">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="registernow-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const registeredPage = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosed = () => (
    <div className="rc-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="rc-heading">Registrations Are Closed Now!</h1>
      <p className="rc-text">Stay tuned. We will reopen</p>
    </div>
  )

  const registrationStatus = () => {
    switch (eventStatus) {
      case 'INITIAL':
        return initialpage()
      case 'YET_TO_REGISTER':
        return yetToRegisterPage()
      case 'REGISTERED':
        return registeredPage()
      case 'REGISTRATIONS_CLOSED':
        return registrationsClosed()
      default:
        return null
    }
  }

  return registrationStatus()
}

export default ActiveEventRegistrationDetails
