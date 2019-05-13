import React, { useState, useCallback } from 'react'
import ChatInput from './ChatInput'
import ChatContent from './ChatContent'
import ChatTopBar from './ChatTopBar'
import ChatBottomBar from './ChatBottomBar'

import { useChatInput } from '../hooks/useChatInput'

const ChatWindow = ({ close }) => {
  const [fullScreen, setFullscreen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello, how can I help ?' }
  ])

  const pushUserMessage = useCallback(message => {
    let messagesToPush = [{ type: 'user', content: message }]
    if (Math.random() > 0.5) {
      messagesToPush.push({
        type: 'bot',
        content: 'Here will be some content from the API'
      })
    }

    setMessages(existingMessages => [...existingMessages, ...messagesToPush])
  }, [])

  const toggleFullScreen = () => setFullscreen(fs => !fs)

  const { textarea, message, handleMessageChange, sendMessage } = useChatInput(
    pushUserMessage
  )

  return (
    <div className={`Chat--wrapper ${fullScreen ? 'fullscreen' : ''}`}>
      <ChatBottomBar
        sendMessage={sendMessage}
        toggleFullScreen={toggleFullScreen}
        fullScreen={fullScreen}
      />
      <ChatInput
        textarea={textarea}
        message={message}
        handleMessageChange={handleMessageChange}
        sendMessage={sendMessage}
      />
      <ChatContent messages={messages} />
      <ChatTopBar close={close} />
    </div>
  )
}

export default ChatWindow
