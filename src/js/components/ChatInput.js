import React, { useState, useRef, useEffect, useCallback } from 'react'

const ChatInput = ({ onSubmit }) => {
  const [message, setMessage] = useState('')
  const textarea = useRef(null)
  const messageToSend = useRef(message)

  // Store message in a ref to avoid re run the keyboard effect everytime the message changes
  useEffect(() => {
    messageToSend.current = message
  }, [message])

  const sendMessage = useCallback(() => {
    setMessage('')
    if (messageToSend.current && messageToSend.current.trim()) {
      onSubmit(messageToSend.current)
    }
  }, [onSubmit])

  useEffect(() => {
    console.log('expensive effect run')
    const handleKeyboard = e => {
      if (e.code === 'Enter' && e.shiftKey === false) {
        sendMessage()
      }
    }

    const textareaDom = textarea.current
    textareaDom.addEventListener('keyup', handleKeyboard)

    return () => {
      console.log('expensive effect clean')
      textareaDom.removeEventListener('keyup', handleKeyboard)
    }
  }, [sendMessage])

  const handleMessageChange = e => setMessage(e.target.value)

  return (
    <>
      <textarea
        ref={textarea}
        className="Chat--input"
        placeholder="Write a message..."
        value={message}
        onChange={handleMessageChange}
      />
      <button
        aria-label="Send"
        className="Chat--send-button"
        onClick={sendMessage}
      >
        <i className="material-icons">send</i>
      </button>
    </>
  )
}

export default ChatInput
