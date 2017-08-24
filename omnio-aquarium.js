var slack = require('slack')

// logs {args:{hello:'world'}}
var bot = slack.rtm.client()
var token = 'xoxb-218646722133-tRFub2ARJUicPwIVLfu70opX'

bot.hello(message=> {
    console.log(`Got a message: ${message}`)
bot.close()
})

bot.listen({token})