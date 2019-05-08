import React, { useState, useRef, useEffect } from 'react'

const ChatInput = ({ onSubmit }) => {
  const [message, setMessage] = useState('')
  const textarea = useRef(null)
  const messageToSend = useRef(message)

  // Store message in a ref to avoid re run the keyboard effect everytime the message changes
  useEffect(() => {
    messageToSend.current = message
  }, [message])

  useEffect(() => {
    console.log('expensive effect run')
    const handleKeyboard = e => {
      if (e.code === 'Enter' && e.shiftKey === false) {
        setMessage('')
        onSubmit(messageToSend.current)
      }
    }

    const textareaDom = textarea.current
    textareaDom.addEventListener('keyup', handleKeyboard)

    return () => {
      console.log('expensive effect clean')
      textareaDom.removeEventListener('keyup', handleKeyboard)
    }
  }, [onSubmit])

  const handleMessageChange = e => setMessage(e.target.value)

  return (
    <textarea
      ref={textarea}
      className="Chat--input"
      placeholder="Write a message..."
      value={message}
      onChange={handleMessageChange}
    />
  )
}

export default ChatInput
