var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
  .options({
    location:{
      demand: false,
      alias: 'l',
      description: 'Enter your city to get weather',
      type: 'string'
    }
  })
  .argv;

// if location is provided
if (argv.location != null) {
  console.log('Location provided by user: ' + argv.location + '\n');
  //get weather
  weather(argv.l).then(
    function(weatherGotFromGetWeather) {
      console.log(weatherGotFromGetWeather);
    },
    function(reject) {
      console.log(reject);
    }
  ).catch(
    function(e) {
      console.log(e);
    }
  )

} else { //if location not provided
  location().then(
    function(locationGotFromGetLocation) {
      console.log('I guess that you\'re from: ' + locationGotFromGetLocation + '\n');
      return weather(locationGotFromGetLocation); //return another promise
    },
    function(reject) {
      console.log(reject);
    }).then(
      function(weatherGotFromGetWeather) {
        console.log(weatherGotFromGetWeather);
      },
      function(reject) {
        console.log(reject);
      }
    ).catch(function(e) {
      console.log(e);
  })

}
