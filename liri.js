require("dotenv").config();
var inquirer = require("inquirer");
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

inquirer.prompt([{
    type: "list",
    name: "LIRIBotCommands",
    message: "Please input a Command",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
}, ]).then(function (command) {
    switch (command.LIRIBotCommands) {
        case "my-tweets":
            var params = {
                screen_name: 'mhhlax22'
            };
            client.get('statuses/user_timeline', params, function (error, tweets, response) {
                for (var i = 0; i < tweets.length; i++) {
                    console.log("-----------------------------------");
                    console.log(tweets[i].text);
                }
            });
            break;

        case "spotify-this-song":
            // also could use .prompt and then .then to run function
            var track = process.argv[2];

            if (process.argv[2] === undefined) {
                track = "Wyclef Jean";
            }
            for (var i = 3; i < process.argv.length; i++) {
                track += "+" + process.argv[i];
            }
            spotify.search({
                type: 'track',
                query: track,
                limit: "1"
            }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                //   console.log(JSON.stringify(data.tracks.items, null, 2)); 

                console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                console.log("Songs Name: " + data.tracks.items[0].name);
                console.log("Song URL : " + data.tracks.items[0].external_urls.spotify);
                console.log("Album : " + data.tracks.items[0].album.name);
            })

            break;

        case "do-what-it-says":
            console.log("this case is working");
            var fs = require("fs");
            fs.readFile("random.txt", "utf8", function (error, data) {
                console.log(data);
            })
            break;

        case "movie-this":
            var movie = process.argv[2];

            if (process.argv[2] === undefined) {
                movie = "Jaws";
            }
            for (var i = 3; i < process.argv.length; i++) {
                movie += "+" + process.argv[i];
            }
            var queryURl = ("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy");
            // also could use .prompt and then .then to run function
            request(queryURl, function (error, response, body) {
                if (!error && response.statusCode === 200) {

                    // console.log(JSON.stringify(JSON.parse(body), null, 2));

                    console.log("Title: " + JSON.parse(body).Title);
                    console.log("Year: " + JSON.parse(body).Year);
                    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                    // try using the index number of the array to get Rotten Tomatoes rating
                    console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Country: " + JSON.parse(body).Country);
                    console.log("Language: " + JSON.parse(body).Language);
                    console.log("Plot: " + JSON.parse(body).Plot);
                    console.log("Actors: " + JSON.parse(body).Actors);
                };
            });
            break;
    }
})