import React from 'react'

const ChatContent = ({ messages }) => {
  let previousType = null
  let newRow = true
  return (
    <div className="Chat--content">
      <div className="Chat--messages">
        {messages.map((message, key) => {
          newRow = message.type !== previousType
          previousType = message.type
          return (
            <div
              className={`Chat--message ${message.type} ${
                newRow ? 'new-row' : ''
              }`}
              key={key}
            >
              {newRow && message.type === 'bot' ? (
                <span className="Chat--message-portrait">
                  <i className="material-icons">android</i>
                </span>
              ) : null}
              <span>
                {message.content.split('\n').map((line, lineKey) => (
                  <span key={lineKey}>
                    {lineKey > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChatContent
