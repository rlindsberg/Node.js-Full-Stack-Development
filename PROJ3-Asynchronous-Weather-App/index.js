var weather = require('./weather.js');
var location = require('./location.js');

weather(function(currentWeather) {
  console.log(currentWeather);
});

location(function(userLocation) {
  console.log('city: ' + userLocation.city);
  console.log('log/lat: ' + userLocation.loc);
})
