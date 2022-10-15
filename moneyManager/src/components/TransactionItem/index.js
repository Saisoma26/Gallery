import './index.css'

const TransactionItem = props => {
  const {itemDetails, deletefunc} = props
  const {title, amount, type, id} = itemDetails

  const ondelete = () => {
    deletefunc(id)
  }

  return (
    <li className="item-container">
      <p className="p">{title}</p>
      <p className="p">{amount}</p>
      <p className="p">{type}</p>
      <button className="b" testId="delete" onClick={ondelete} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteimage"
        />
      </button>
    </li>
  )
}

export default TransactionItem
