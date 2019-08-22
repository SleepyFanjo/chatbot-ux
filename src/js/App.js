import React, { useState, useEffect } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ChatBubbleButton from './components/ChatBubbleButton'
import ChatWindow from './components/ChatWindow'

const CenteredLogo = () => {
  return (
    <div className="Centered__logo">
      <img src="http://image.pictetassetmanagement-email.com/lib/fe381570756405797c1173/m/1/d1dde271-12cb-4c3d-82ab-aeb75e4776a7.png" />
      <span>Pictet Careers</span>
    </div>
  )
}

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
    <>
      <CenteredLogo />
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
    </>
  )
}

export default App
