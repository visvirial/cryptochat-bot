
var Slack = require('./Slack.js');

var ZaifChat = function(config) {
	this.slack = new Slack(config.slack);
	this.socket = require('socket.io-client')('https://chat.zaif.jp:8080');
	var this_ = this;
	this.socket.on('connect', function() {
		console.log('[ZaifChat] connected.');
	});
	this.socket.on('disconnect', function() {
		console.log('[ZaifChat] disconnected.');
	});
	this.socket.on('say', function(data) {
		console.log('[ZaifChat] new message from user='+data.name+': '+data.msg);
		this_.slack.send(data.name, data.msg);
	});
	this.socket.on('enter', function(data) {
		console.log('[ZaifChat] user='+data.name+' entered');
		this_.slack.send('Administrator', '`'+data.name+'` が入室しました。');
	});
};

module.exports = ZaifChat;

