import React from 'react'

const ChatBubbleButton = ({ openChat }) => {
  return (
    <button
      onClick={openChat}
      aria-label="Open Chatbot"
      className="ChatBubble--wrapper mdc-elevation-transition"
    >
      <i className="material-icons">question_answer</i>
    </button>
  )
}

export default ChatBubbleButton
