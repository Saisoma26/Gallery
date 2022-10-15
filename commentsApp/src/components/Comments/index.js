import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {list: [], name: '', comment: ''}

  nameinputupdate = event => {
    this.setState({name: event.target.value})
  }

  commentinputupdate = event => {
    this.setState({comment: event.target.value})
  }

  addcomment = () => {
    const {name, comment} = this.state
    const item = {
      id: uuidv4(),
      name,
      comment,
      isliked: false,
    }
    this.setState(prevState => ({
      list: [...prevState.list, item],
      name: '',
      comment: '',
    }))
  }

  delete = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(each => each.id !== id),
    }))
  }

  like = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each => {
        if (each.id === id) {
          const eachitem = {
            ...each,
            isliked: !each.isliked,
          }
          return eachitem
        }
        return each
      }),
    }))
  }

  render() {
    const {list, name, comment} = this.state
    const count = list.length

    return (
      <div className="back">
        <h1 className="heading">Comments</h1>
        <p className="subheading">Say something about 4.0 Techologies</p>
        <div className="card">
          <form className="formel">
            <input
              value={name}
              className="nameinput"
              type="text"
              placeholder="Your Name"
              onChange={this.nameinputupdate}
            />
            <textarea
              value={comment}
              className="commentinput"
              type="textarea"
              placeholder="Your Comment"
              onChange={this.commentinputupdate}
            />
            <button className="b" type="button" onClick={this.addcomment}>
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="commentsimage"
          />
        </div>
        <hr />
        <p className="commentsbox">
          <span className="commentscount">{count}</span>Comments
        </p>
        <ul className="list-container">
          {list.map(each => (
            <CommentItem
              key={each.id}
              deletefunc={this.delete}
              likefunc={this.like}
              itemDetails={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
