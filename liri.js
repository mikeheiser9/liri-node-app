// require("dotenv").config(error, data);
var inquirer = require("inquirer");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);
// var client = new twitter(keys.twitter);

inquirer.prompt([{
    type: "list",
    name: "LIRIBotCommands",
    message: "Please input a Command",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
}, ]).then(function (command) {
    switch (command.LIRIBotCommands) {
        case "my-tweets":
         
        var params = {screen_name: 'mhhlax22'};
        keys.twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
            console.log(tweets);
            // console.log(error);
        
        });
        break; 
        case "spotify-this-song":
        console.log("this case is working");


        break;

        case "movie-this":
        console.log("this case is working");
        var movie = process.argv[2];

        


        break;

        case "do-what-it-says":
        console.log("this case is working");
        var fs = require("fs");
        fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);
        })
        break;
        default: 
        console.log ("error");
    }
})