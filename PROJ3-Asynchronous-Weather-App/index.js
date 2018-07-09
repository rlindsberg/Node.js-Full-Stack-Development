var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
  .options({
    location:{
      demand: true,
      alias: 'l',
      description: 'Enter your city to get weather',
      type: 'string'
    }
  })
  .argv;

// get weather
if (argv.location != null) {
  console.log(argv.location);
  weather(argv.l, function(currentWeather) {
    console.log(currentWeather);
  });
}



//
//
// location(function(userLocation) {
//   if (userLocation.errno != null) {
//     console.log('Error requesting ' + userLocation.hostname + ':' + userLocation.port + ' \n');
//
//     console.log(userLocation);
//
//     return;
//   }
//   console.log('city: ' + userLocation.city);
//   console.log('log/lat: ' + userLocation.loc);
// })
