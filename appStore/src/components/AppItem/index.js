import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  return (
    <li className="appcard">
      <img
        src={itemDetails.imageUrl}
        alt={itemDetails.appName}
        className="image"
      />
      <p className="appname">{itemDetails.appName}</p>
    </li>
  )
}

export default AppItem
