import React from 'react'

const ChatbotButton = ({ option, sendUserMessage }) => {
  if (option.type === 'link') {
    return (
      <>
        <br />
        <a href={option.value} target="_blank">
          {option.text}
        </a>
      </>
    )
  }

  return (
    <button
      onClick={() => {
        sendUserMessage(option)
      }}
    >
      {option.text}
    </button>
  )
}

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
                      <ChatbotButton
                        option={option}
                        sendUserMessage={sendUserMessage}
                        key={key}
                      />
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
