import React from 'react'

const ChatContent = ({ messages, pushUserMessage }) => {
  let previousType = null
  let newRow = true

  const sendUserMessage = message => {
    pushUserMessage(message.value)
  }

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
                {message.options &&
                  message.options.map((option, key) => {
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          sendUserMessage(option)
                        }}
                      >
                        {option.text}
                      </button>
                    )
                  })}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChatContent
