var weather = require('./weather.js');

weather(function(currentWeather) {
  console.log(currentWeather);
});


console.log('After weather function in index.js!');
