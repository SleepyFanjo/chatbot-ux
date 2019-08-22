import React, { useState, useCallback, useEffect } from 'react'
import ChatInput from './ChatInput'
import ChatContent from './ChatContent'
import ChatTopBar from './ChatTopBar'
import ChatBottomBar from './ChatBottomBar'

import { useChatInput } from '../hooks/useChatInput'

import BotHandler from '../chatbot'

const botHandler = new BotHandler()

const ChatWindow = ({ close }) => {
  const [fullScreen, setFullscreen] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    botHandler.init(setMessages, [
      {
        type: 'bot',
        content:
          "Hi! I'm Amy, your personal job assistant today. I'm here to answer your questions about Pictet in your preferred language"
      }
    ])
  }, [])

  const pushUserMessage = useCallback(message => {
    botHandler.notify({ type: 'user', content: message })
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
      <ChatContent messages={messages} pushUserMessage={pushUserMessage} />
      <ChatTopBar close={close} />
    </div>
  )
}

export default ChatWindow
