import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {itemDetails, favouritefunc} = props
  const {title, date, isfavourite, id} = itemDetails
  const date1 = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const favourite = () => {
    favouritefunc(id)
  }
  const favimage = isfavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="listitem">
      <div className="textcontainer">
        <p className="heading">{title}</p>
        <p className="description">{date1}</p>
      </div>
      <button className="b" type="button" onClick={favourite} testId="star">
        <img src={favimage} alt="star" className="image" />
      </button>
    </li>
  )
}

export default AppointmentItem
