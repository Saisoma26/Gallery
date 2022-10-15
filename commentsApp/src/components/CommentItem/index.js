import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {itemDetails, deletefunc, likefunc} = props
  const {name, comment, id, isliked} = itemDetails
  const time = formatDistanceToNow(new Date())

  const deleteitem = () => {
    deletefunc(id)
  }

  const like = () => {
    likefunc(id)
  }

  const frstletter = name.slice(0, 1)

  const likeicon = isliked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const liketext = isliked ? 'liked' : 'notliked'

  return (
    <li className="back">
      <div className="icon">
        <p className="frstletter">{frstletter}</p>
      </div>
      <h1 className="name">
        {name} <span className="time">less than {time} ago</span>
      </h1>
      <p className="comment">{comment}</p>
      <div className="likendelete">
        <img src={likeicon} className="likeimage" alt="likeicon" />
        <button className={liketext} onClick={like}>
          Like
        </button>
        <button className="deletebutton" onClick={deleteitem} testid="delete">
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
