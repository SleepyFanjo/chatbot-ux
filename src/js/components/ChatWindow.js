import React from 'react'

const ChatWindow = ({ close }) => {
  return (
    <div className="Chat--wrapper" onClick={close}>
      <div className="Chat--bottom-bar" />
      <textarea className="Chat--input" placeholder="Write a message..." />
      <div className="Chat--content" />
      <div className="Chat--top-bar" />
    </div>
  )
}

export default ChatWindow
