import React from 'react'

const ChatContent = ({ messages }) => {
  return (
    <div className="Chat--content">
      <div className="Chat--messages">
        {messages.map((message, key) => (
          <div className={`Chat--message ${message.type}`} key={key}>
            <span>
              {message.content.split('\n').map((line, lineKey) => (
                <span key={lineKey}>
                  {lineKey > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatContent
