console.log('The bot is now starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//  search twitter for all tweets containing the word 'flag' since July 4, 2018
// These parameters can be altered for depending on what you're looking for
var params = {
    q: 'flag',
    count: 5
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
    console.log(data)
}