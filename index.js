
var config = require('./config.json');

var zaif = new require('./src/ZaifChat.js')(config.zaif);
var coincheck = new require('./src/CoincheckChat.js')(config.coincheck);

