var weather = require('./weather.js');
var location = require('./location.js');

// weather(function(currentWeather) {
//   console.log(currentWeather);
// });

location(function(userLocation) {
  if (userLocation != null) {
    console.log('Error requesting ' + userLocation.hostname + ':' + userLocation.port + ' \n');

    console.log(userLocation);

    return;
  }
  console.log('city: ' + userLocation.city);
  console.log('log/lat: ' + userLocation.loc);
})
