
var Slack = require('./Slack.js');
var signalR = require('signalr-client');

var BitFlyerChat = function(config) {
	this.slack = new Slack(config.slack);
	this.client = new signalR.client('wss://lightning.bitflyer.jp/signalr', ['BFEXHub']);
	var this_ = this;
	this.client.on('BFEXHub', 'addNewMessageToPage', function(name, message) {
		// Replace URLs.
		message = message.replace(/<a href="(.+?)" target="_blank">(.+)<\/a>/gm, '<$1|$2>');
		// Replace glossary words.
		message = message.replace(/<a href="(.+?)" target="glossary" title="((.|\n|\r\n)+?)">(.+)<\/a>/gm, '<$1|$4>');
		this_.slack.send('BitFlyer', name, message);
	});
};

module.exports = BitFlyerChat;

