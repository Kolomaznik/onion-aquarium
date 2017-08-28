var Bot = require('slackbots');
var botConfig = require('../config/slackbot');

var bot = new Bot(botConfig.settings);
bot.on('start', function() {

    bot.postMessageToChannel('general', 'Hello channel!');
    //bot.postMessageToUser('some-username', 'hello bro!');
    //bot.postMessageToGroup('some-private-group', 'hello group chat!');


});

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);

    //var username = bot.users.find(function (user) { return user.id == data.user }).name;
    //var channelName =   bot.channels.find(function (channel) { return channel.id == data.channel }).name;
    console.log(getChannelName(data.channel));




});

var getChannelName = function (channelId) {
    var channels = bot.channels.filter(function (ch) { return ch.id == channelId });
    if (channels.length != 1) {
        throw new Error("Channel not found!");
    }

    return channels[0].name;
}

module.exports = {




}



