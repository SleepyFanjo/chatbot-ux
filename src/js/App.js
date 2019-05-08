import React, { useState, useEffect } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ChatBubbleButton from './components/ChatBubbleButton'
import ChatWindow from './components/ChatWindow'

const App = () => {
  const [chatDisplayed, setChatDisplayed] = useState(false)
  const [buttonDisplayed, setButtonDisplayed] = useState(true)

  const closeChat = () => {
    setChatDisplayed(false)
    setButtonDisplayed(true)
  }

  const openChat = () => {
    setButtonDisplayed(false)
  }

  useEffect(() => {
    if (buttonDisplayed === false) {
      setTimeout(() => {
        setChatDisplayed(true)
      }, 280)
    }
  }, [buttonDisplayed])

  return (
    <TransitionGroup>
      {chatDisplayed ? (
        <CSSTransition
          key="window"
          timeout={{
            appear: 280,
            enter: 280,
            exit: 0
          }}
          classNames="Chat--transition"
        >
          <ChatWindow close={closeChat} />
        </CSSTransition>
      ) : null}
      {buttonDisplayed ? (
        <CSSTransition
          key="bubble"
          timeout={{
            appear: 0,
            enter: 0,
            exit: 280
          }}
          classNames="ChatBubble--transition"
        >
          <ChatBubbleButton openChat={openChat} />
        </CSSTransition>
      ) : null}
    </TransitionGroup>
  )
}

export default App
