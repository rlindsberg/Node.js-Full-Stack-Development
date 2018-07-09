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
  console.log(argv.location);
  // get weather
  weather(argv.l, function(currentWeather) {
    console.log(currentWeather);
  });
} else { //if location not provided
  location(function(userLocation) {
    if (userLocation.errno != null) { //if error
      console.log('Error requesting ' + userLocation.hostname + ':' + userLocation.port + ' \n');
      return;
    }
    //no error
    // get weather
    var city = userLocation.city;
    weather(city, function(currentWeather) {
      console.log(currentWeather);
    });
  })
}
