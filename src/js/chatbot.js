class Chatbot {
  messages = []
  scenario = [
    {
      user: 'Hi',
      bot: {
        type: 'bot',
        content: 'How may I assist you?',
        options: [
          { text: 'Job search', value: 'I am looking for a job' },
          { text: 'About us', value: "I'd like to know more about you" }
        ]
      }
    },
    {
      user: 'Yes',
      bot: {
        type: 'bot',
        content: 'How may I assist you?',
        options: [
          { text: 'Job search', value: 'I am looking for a job' },
          { text: 'About us', value: "I'd like to know more about you" }
        ]
      }
    },
    {
      user: 'I am looking for a job',
      bot: {
        type: 'bot',
        content: 'Sure, I can help here. How would you like to proceed?'
      }
    },
    {
      user: "I'd like to know more about you",
      bot: {
        type: 'bot',
        content: 'We are working on a good presentation for you, come back soon'
      }
    },
    {
      user: 'What is the recruitment process?',
      bot: {
        type: 'bot',
        content:
          'To be considered for a position at Pictet, it is required that you complete the online application, here is the link ...'
      }
    },
    {
      user: 'Great thanks. By the way do you know how long it takes usually?',
      bot: {
        type: 'bot',
        content:
          'Times can vary on hearing back from Pictet as timing can depend on the amount of candidates we receive for the role. We ensure we consider all viable candidates so we ask for your patience. You will receive a communication once they move to the next step in the process.'
      }
    },
    {
      user: 'Ok thanks Amy!',
      bot: {
        type: 'bot',
        content: 'Do you have any other question',
        options: [{ text: 'Yes', value: 'Yes' }, { text: 'No', value: 'No' }]
      }
    },
    {
      user: 'No',
      bot: {
        type: 'bot',
        content: 'May I ask you how was your experience with me?',
        options: [
          { text: '*', value: 'Medium' },
          { text: '**', value: 'Decent' },
          { text: '***', value: 'Bliss' }
        ]
      }
    },
    {
      user: 'Medium',
      bot: {
        type: 'bot',
        content: 'Thank you for letting me know! Have a nice day!'
      }
    },
    {
      user: 'Decent',
      bot: {
        type: 'bot',
        content: 'Thank you for letting me know! Have a nice day!'
      }
    },
    {
      user: 'Bliss',
      bot: {
        type: 'bot',
        content: "I'm glad it helped! Have a nice day!"
      }
    }
  ]
  updateComponent = null

  init = (updateFunction, initialState) => {
    this.updateComponent = updateFunction
    this.messages = initialState
    this.synchronizeChat()
  }

  pushMessage = message => {
    this.messages = [...this.messages, message]
    this.synchronizeChat()
  }

  synchronizeChat = () => {
    if (this.updateComponent) {
      this.updateComponent(this.messages)
    }
  }

  handleScenario = userMessage => {
    let scenarioFound = this.scenario.find(scenario => {
      return scenario.user === userMessage.content
    })

    if (scenarioFound) {
      this.pushMessage(scenarioFound.bot)
    }

    return scenarioFound
  }

  handleUserMessage = userMessage => {
    if (!this.handleScenario(userMessage)) {
      this.pushMessage({
        type: 'bot',
        content:
          "Sorry I can't handle this request yet, can I help on something else ?"
      })
    }
    this.synchronizeChat()
  }

  notify = userMessage => {
    this.pushMessage(userMessage)
    this.handleUserMessage(userMessage)
  }
}

export default Chatbot
