import React from 'react'

const ChatBottomBar = ({ sendMessage, toggleFullScreen, fullScreen }) => {
  return (
    <div className="Chat--bottom-bar">
      <div className="Chat-bottom-bar left">
        <button
          aria-label="Full screen"
          className="Chat--bottom-button"
          onClick={toggleFullScreen}
        >
          <i className="material-icons">
            {fullScreen ? 'fullscreen_exit' : 'fullscreen'}
          </i>
        </button>
      </div>
      <div className="Chat-bottom-bar right">
        <button
          aria-label="Send"
          className="Chat--bottom-button"
          onClick={sendMessage}
        >
          <i className="material-icons">send</i>
        </button>
      </div>
    </div>
  )
}

export default ChatBottomBar
