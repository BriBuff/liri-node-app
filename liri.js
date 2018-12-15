require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.

var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
  
// * You should then be able to access your keys information like so

  ```js
  var spotify = new Spotify(keys.spotify);
  ```
  // Store the search variables
  var search = process.argv[2];
  var term = process.argv.splice(3).join(" ");

  if (!search) {
    search = "movie";
  }

  if (!term) {
    term = "Mr.Nobody"
  }

  // If/Else statement to run the correct API function to search
  if (search === "concert-this") {
    concertThis();
  } else if (search === "spotify-this-song") {
    spotifyThis();
  } else if (search === "movie-this") {
    movieThis();
  } else {
    console.log("Please use a correct search term.")};

// 9. Make it so liri.js can take in one of the following commands:

  //  * `concert-this`
  //  `node liri.js concert-this <artist/band name here>`

   var concertThis = function(artist) {
     var urlConcert = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
     axios.get().then(function(response){
      var jsonInfo = response.data[0];
      var movieInfo = [
          "Artist/Band Name: " + jsonInfo.name,
          "Vanue Location: " + jsonInfo.genres,
          "Date of Event: " + jsonInfo.rating.average
        ].join("\n\n");

   });

//    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

//      * Name of the venue

//      * Venue location

//      * Date of the Event (use moment to format this as "MM/DD/YYYY")

  //  * `spotify-this-song`

  //  `node liri.js spotify-this-song '<song name here>'`
  var Spotify = require('node-spotify-api');
   var spotifyThis =
      spotify
      .search({ type: 'track', query: 'All the Small Things' })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });

  //     spotify
  // .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  // .then(function(data) {
  //   console.log(data); 
  // })
  // .catch(function(err) {
  //   console.error('Error occurred: ' + err); 
  // });


//    * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from
// * If no song is provided then your program will default to "The Sign" by Ace of Base.

// * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

  //  * `movie-this`

   var movieThis = function(movie) {
     var movieURL = "http://www.omdbapi.com/?i=tt3896198&apikey=eb179323" + movie;
    axios.get().then(function(response){
      var jsonInfo = response.data[0];
      var movieInfo = [
          "Movie: " + jsonInfo.title,
          "Release Year: " + jsonInfo.released,
          "Rating: " +jsonInfo.rated,
          "IMDB Rating: " + jsonInfo.rating.imdbRating,
          "Rotten Tomatoes Rating: " + jsonInfo.rating[1].value,
          "Country of Origin: " + jsonInfo.network.country,
          "Plot: " + jsonInfo.plot,
          "Featured Actors: " + jsonInfo.actors
        ].join("\n\n");
    })

   };

//    API Key: http://www.omdbapi.com/?i=tt3896198&apikey=eb179323 (eb179323)

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

//      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

//      * It's on Netflix!

//    * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.


  //  * `do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.