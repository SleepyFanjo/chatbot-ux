import React from 'react'

const ChatInput = ({ textarea, message, handleMessageChange }) => {
  return (
    <>
      <textarea
        ref={textarea}
        className="Chat--input"
        placeholder="Write a message..."
        value={message}
        onChange={handleMessageChange}
      />
    </>
  )
}

export default ChatInput
