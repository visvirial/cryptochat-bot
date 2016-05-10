
var SlackNode = require('slack-node');

var Slack = function(config) {
	this.config = config;
	this.slack = new SlackNode();
	this.slack.setWebhook(config.endpoint);
};

Slack.prototype.send = function(user, msg) {
	console.log('[Slack] sending message... [user='+user+', msg='+msg+']');
	this.slack.webhook({
		channel: this.config.channel,
		username: user,
		//icon_emoji: ,
		text: msg,
	}, function(err, res) {
		if(err) console.log(err);
	});
};

module.exports = Slack;

