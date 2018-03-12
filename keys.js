console.log('this is loaded');
var twitter = require('twitter');
var twitterKeys = new twitter ({
    consumer_key: process.env.qod94TWNT5cf2T3Bzt6fp3TBT,
    consumer_secret: process.env.ZW6QXJTsToGmsyYl9M0duXvLujyONF76IDiFL42FiiWhFap2X3,
    
    access_token_key: process.env. 150559200-MzOAZBZWIyWCYChj2AM06ewSgSyl6xrDUdDjUnmJ,
    access_token_secret: process.env.ECl3Czm2kyfdLeykK2RgIbGyt6vfgS9lHlZy0V6zRXLi0
})

var spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

module.exports = {
twitterKeys: twitterKeys
}
