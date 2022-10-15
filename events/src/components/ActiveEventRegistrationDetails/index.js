import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const initialpage = () => (
    <>
      <p className="initial-text">Click on an event to view its details</p>
    </>
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
        Register Now
      </button>
    </div>
  )

  const registeredPage = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <p className="registered-text">
        You have already registered for the event
      </p>
    </>
  )

  const registrationsClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <p className="rc-heading">Registrations Are Closed Now!</p>
      <p className="rc-text">
        Stay tuned we will reopen the registrations soon!
      </p>
    </>
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
