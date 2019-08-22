import { useState, useRef, useEffect, useCallback } from 'react'

export const useChatInput = onSubmit => {
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
      if (messageToSend.current[messageToSend.current.length - 1] === '\n') {
        onSubmit(messageToSend.current.slice(0, -1))
      } else {
        onSubmit(messageToSend.current)
      }
    }
  }, [onSubmit])

  useEffect(() => {
    const handleKeyboard = e => {
      if (e.code === 'Enter' && e.shiftKey === false) {
        sendMessage()
      }
    }

    const textareaDom = textarea.current
    textareaDom.addEventListener('keyup', handleKeyboard)

    return () => {
      textareaDom.removeEventListener('keyup', handleKeyboard)
    }
  }, [sendMessage])

  const handleMessageChange = e => setMessage(e.target.value)

  return {
    textarea,
    message,
    handleMessageChange,
    sendMessage
  }
}
