class Chatbot {
  messages = []
  scenario = [
    {
      user: 'hi',
      bot: {
        type: 'bot',
        content: 'Tell me, how may I assist you?'
      }
    },
    {
      user: 'hello',
      bot: {
        type: 'bot',
        content: 'Tell me, how may I assist you?'
      }
    },
    {
      user: 'looking for a job',
      bot: {
        type: 'bot',
        content: 'Sure. How would you like to proceed?'
      }
    },
    {
      user: 'informations',
      bot: {
        type: 'bot',
        content: 'You can have a look at our website, here is the link',
        options: [
          { type: 'link', value: 'https://group.pictet', text: 'Click here' }
        ]
      }
    },
    {
      user: 'recruitment process',
      bot: {
        type: 'bot',
        content:
          'To be considered for a position at Pictet, it is required that you complete the online application, here is the link',
        options: [
          {
            type: 'link',
            value:
              'https://career012.successfactors.eu/career?company=banquepict&career%5fns=job%5flisting%5fsummary&navBarLevel=JOB%5fSEARCH&_s.crb=iY2NwvqDtik5Dq9w3%2fwL2LrcwW4%3d',
            text: 'Click here'
          }
        ]
      }
    },
    {
      user: 'how long',
      bot: {
        type: 'bot',
        content:
          'Times can vary on hearing back from Pictet as timing can depend on the amount of candidates we receive for the role. We ensure we consider all viable candidates so we ask for your patience. You will receive a communication once they move to the next step in the process.'
      }
    },
    {
      user: 'thanks',
      bot: {
        type: 'bot',
        content: 'Do you have any other question'
      }
    },
    {
      user: 'no',
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
      user: 'nope',
      bot: {
        type: 'bot',
        content: 'May I ask you how was your experience with me?'
      }
    },
    {
      user: 'yes',
      bot: {
        type: 'bot',
        content: 'Tell me, how may I assist you?'
      }
    },
    {
      user: 'amazing',
      bot: {
        type: 'bot',
        content: 'Thank you for letting me know! Have a nice day!'
      }
    },
    {
      user: 'awesome',
      bot: {
        type: 'bot',
        content: 'Thank you for letting me know! Have a nice day!'
      }
    },
    {
      user: 'all fine',
      bot: {
        type: 'bot',
        content: 'Thank you for letting me know! Have a nice day!'
      }
    },
    {
      user: 'super',
      bot: {
        type: 'bot',
        content: 'Thank you for letting me know! Have a nice day!'
      }
    },
    {
      user: ':)',
      bot: {
        type: 'bot',
        content: ''
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
    let lowerContent = userMessage.content.toLowerCase()
    let scenarioFound = this.scenario.find(scenario => {
      return lowerContent.includes(scenario.user)
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
        content: "Sorry I didn't get it, can you rephrase?"
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
