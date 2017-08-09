var Bot = require('slackbots');
var botConfig = require('../config/slackbot');

var bot = new Bot(botConfig.settings);

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Hello channel!');
    //bot.postMessageToUser('some-username', 'hello bro!');
    //bot.postMessageToGroup('some-private-group', 'hello group chat!');
});