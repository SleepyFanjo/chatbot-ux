import React from 'react'

const ChatTopBar = ({ close }) => {
  return (
    <div className="Chat--top-bar" onClick={close}>
      <div className="Chat--top-bar-title">Chatbot...</div>
      <div className="Chat--top-bar-actions">
        <button
          aria-label="Close chat"
          className="Chat--top-bar-close"
          onClick={close}
        >
          <i className="material-icons">close</i>
        </button>
      </div>
    </div>
  )
}

export default ChatTopBar
