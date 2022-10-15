import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, displayfunc, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = itemDetails

  const cs = isActive ? 'bright' : 'dim'

  const display = () => {
    displayfunc(itemDetails)
  }

  return (
    <li className="item">
      <button onClick={display} type="button" className="b">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${cs} thumbnailimage`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
