
var TelegramBot = require('node-telegram-bot-api');

var Telegram = function(config) {
	this.config = config;
	this.telegram = new TelegramBot(config.token, {polling: true});
};

Telegram.prototype.send = function(service, user, msg) {
	console.log('[Telegram] sending message... [user='+user+', msg='+msg+']');
	this.telegram.sendMessage(this.config.chat_id, '['+service+'] '+user+'\n'+msg);
};

module.exports = Telegram;

