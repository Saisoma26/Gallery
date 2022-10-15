import {Component} from 'react'

import './index.css'

const Message = props => {
  const {text} = props
  return <p className="text">{text}</p>
}

export default Message
