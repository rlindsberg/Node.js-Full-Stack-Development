var weather = require('./weather.js');
var location = require('./location.js');

// weather(function(currentWeather) {
//   console.log(currentWeather);
// });

location(function(userLocation) {
  if (!userLocation) {
    console.log('There is an error!');
    return;
  }
  console.log('city: ' + userLocation.city);
  console.log('log/lat: ' + userLocation.loc);
})
