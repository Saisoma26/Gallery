import './index.css'

const EventItem = props => {
  const {itemDetails, onclickFunc} = props
  const {imageUrl, name, location} = itemDetails

  const itemSelectFunc = () => {
    onclickFunc(itemDetails)
  }

  return (
    <li className="event-item-container">
      <button className="b" type="button" onClick={itemSelectFunc}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
