
var Slack = require('./Slack.js');
var Telegram = require('./Telegram.js');

var Destination = function(config) {
	this.config = config;
	if(config.slack.enabled) {
		this.slack = new Slack(config.slack);
	}
	if(config.telegram.enabled) {
		this.telegram = new Telegram(config.telegram);
	}
};

Destination.prototype.send = function(service, user, msg) {
	console.log('[Destination] sending message... [service='+service+', user='+user+', msg='+msg+']');
	if(this.slack) {
		this.slack.send(service, user, msg);
	}
	if(this.telegram) {
		this.telegram.send(service, user, msg);
	}
};

module.exports = Destination;

