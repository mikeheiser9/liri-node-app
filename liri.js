// require("dotenv").config(error, data);
var inquirer = require("inquirer");
var keys = require("./keys.js");

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
        break;

        case "do-what-it-says":
        console.log("this case is working");
        break;
        default: 
        console.log ("error");
    }
})