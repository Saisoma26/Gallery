import './index.css'

const TodoItem = props => {
  const {item, deletefunc} = props
  const {id, title} = item
  const ondeletefunc = () => {
    deletefunc(id)
  }
  return (
    <li className="todoitem">
      <p className="title">{title}</p>
      <button className="b" type="button" value={id} onClick={ondeletefunc}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
