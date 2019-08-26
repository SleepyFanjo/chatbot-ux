import React, { useState } from 'react'
import botFace from '../../asset/bot-face.png'

const JobOffers = ({ offers }) => {
  const [selectedOffer, setOffer] = useState(null)
  return (
    <>
      {selectedOffer ? (
        <div className="Chat__popup--wrapper" onClick={() => setOffer(null)}>
          <div className="Chat__popup">
            <div className="Chat__popup--title">
              {selectedOffer.jobTitle} - {selectedOffer.location}
            </div>
            <div className="Chat__popup--content">
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedOffer.jobDescription
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className="Chat--jobList">
        {offers.map((offer, key) => (
          <button
            class="Chat--jobTitle"
            key={key}
            onClick={() => setOffer(offer)}
          >
            <i class="material-icons">visibility</i>
            {offer.jobTitle} - {offer.location}
          </button>
        ))}
      </div>
    </>
  )
}

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
                <div className="Chat--message-portrait">
                  <img src={botFace} alt="bot avatar" />
                </div>
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
                {message.offers ? <JobOffers offers={message.offers} /> : null}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ChatContent
