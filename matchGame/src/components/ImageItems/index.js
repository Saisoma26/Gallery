import './index.css'

const ImageItems = props => {
  const {itemDetails, onclickfunc} = props

  const selectimage = () => {
    onclickfunc(itemDetails.id)
  }

  return (
    <li className="appcard">
      <button className="b" type="button" onClick={selectimage}>
        <img src={itemDetails.thumbnailUrl} alt="thumbnail" className="image" />
      </button>
      <p className="appname">{itemDetails.appName}</p>
    </li>
  )
}

export default ImageItems
