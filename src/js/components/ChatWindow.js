import React, { useState, useCallback } from 'react'
import ChatInput from './ChatInput'
import ChatContent from './ChatContent'
import ChatTopBar from './ChatTopBar'

const ChatWindow = ({ close }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello, how can I help ?' }
  ])

  const pushUserMessage = useCallback(message => {
    setMessages(existingMessages => [
      ...existingMessages,
      { type: 'user', content: message },
      { type: 'bot', content: 'Here will be some content from the API' }
    ])
  }, [])

  return (
    <div className="Chat--wrapper">
      <div className="Chat--bottom-bar" />
      <ChatInput onSubmit={pushUserMessage} />
      <ChatContent messages={messages} />
      <ChatTopBar close={close} />
    </div>
  )
}

export default ChatWindow
