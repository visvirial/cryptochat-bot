
var Destination = require('./Destination.js');
var request = require('request');

var CoincheckChat = function(config) {
	this.dest = new Destination(config);
	this.config = config;
	this.last_id = null;
	this.fetch = function(first) {
		var url = 'https://coincheck.jp/chats/list';
		if(this.last_id != null) {
			url += '?since_id=' + this.last_id;
		}
		request(url, function(err, res, body) {
			if(err) {
				console.log('[CoincheckChat] failed to fetch recent chat messages', err);
				return;
			}
			try {
				var json = JSON.parse(body);
				json.chats.forEach(function(chat) {
					if(!first) this.dest.send('coincheck', chat.name, chat.content);
					this.last_id = chat.id;
				});
			} catch(e) {
				console.log('[CoincheckChat] failed to parse JSON: ' + body);
			}
		});
	};
	this.fetch(true);
	var this_ = this;
	setInterval(function() {
		this_.fetch(false);
	}, (this.config.fetch_interval || 10000));
};

module.exports = CoincheckChat;

