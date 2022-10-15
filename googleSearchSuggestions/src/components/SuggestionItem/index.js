import './index.css'

const SuggestionItem = props => {
  const {updatefunc, itemDetails} = props
  const {suggestion} = itemDetails
  const onUpdate = () => {
    updatefunc(suggestion)
  }

  return (
    <li className="listitem">
      <p className="suggetsionname">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image"
        onClick={onUpdate}
      />
    </li>
  )
}

export default SuggestionItem
