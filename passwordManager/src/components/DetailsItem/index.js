import './index.css'

const DetailsItem = props => {
  const {itemdetails, isshow, deletefunc} = props
  const {website, password, username, id} = itemdetails

  const deleteitem = () => {
    deletefunc(id)
  }

  const showorhidepassword = () => {
    if (isshow) {
      return <p className="password">{password}</p>
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="stars-image"
      />
    )
  }

  return (
    <li>
      <div className="list-item">
        <div className="profile">
          <p className="letter">{username[0]}</p>
        </div>
        <div className="details-container">
          <p className="websitename">{website}</p>
          <p className="username">{username}</p>
          {showorhidepassword()}
        </div>
        <button
          className="deletebuttton"
          type="button"
          testid="delete"
          onClick={deleteitem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default DetailsItem
