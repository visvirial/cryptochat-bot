
var Slack = require('./Slack.js');

var Destination = function(config) {
	this.config = config;
	if(config.slack.enabled) {
		this.slack = new Slack(config.slack);
	}
};

Destination.prototype.send = function(service, user, msg) {
	console.log('[Destination] sending message... [service='+service+', user='+user+', msg='+msg+']');
	if(this.slack) {
		this.slack.send(service, user, msg);
	}
};

module.exports = Destination;

