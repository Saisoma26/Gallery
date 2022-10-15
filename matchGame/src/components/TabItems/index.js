import './index.css'

const TabItems = props => {
  const {itemDetails, onclickfunc, isactive} = props
  const {displayText, tabId} = itemDetails
  const tabclass = isactive ? 'brightname' : 'dimname'
  const cs = isactive ? 'bright' : 'dim'

  const selecttab = () => {
    onclickfunc(tabId)
  }

  return (
    <li className="tab">
      <button className={tabclass} onClick={selecttab} type="button">
        {displayText}
      </button>
      <hr className={cs} />
    </li>
  )
}

export default TabItems
