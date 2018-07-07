request = require('request');
var urlAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,SE&units=metric&appid=12f270ae25c272675257d4de97f545de';

module.exports = function(callback) {
  //takes two parameters
  request({
    url: urlAPI,
    json: true
  }, function(error, respons, body){
    if (error) {
      console.log('Unable to fetch weather.');
    } else {  //if no error
      // console.log(JSON.stringify(body, null, 4) + '\n');

      var city = body.name;
      var temp = body.main.temp;
      callback('The current temperature in ' + city + ' is ' + temp + '°C.');
      console.log('After callback function in weather.js');
    }

  })
}

console.log('Weather.js After module exports');
