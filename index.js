
var extend = require('extend');

var config = require('./config.json');

var exchanges = {
	zaif: 'Zaif',
	coincheck: 'Coincheck',
	bitflyer: 'BitFlyer',
};

for(var key in exchanges) {
	var val = exchanges[key];
	if(!config[key].enabled) continue;
	config[key].slack = extend({}, config.slack, config[key].slack);
	new require('./src/'+val+'Chat.js')(config[key]);
}

