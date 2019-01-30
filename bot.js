console.log('The bot is now starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);