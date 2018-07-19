request = require('request');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=units=metric&appid=12f270ae25c272675257d4de97f545de';

module.exports = function getWeather(location) {
  return new Promise(function(resolve, reject) {
    var urlAPI = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=12f270ae25c272675257d4de97f545de';
    console.log('urlAPI is:');
    console.log(urlAPI);
    //takes two parameters
    request({
      url: urlAPI,
      json: true
    }, function(error, respons, body){
      if (error) {
        reject('Unable to fetch weather.');
      } else if (body.cod === '404'){
        reject('City not found.')
      } else {  //if no error
        // console.log(JSON.stringify(body, null, 4) + '\n');

        var city = body.name;
        var temp = body.main.temp;
        resolve('\nThe current temperature in ' + city + ' is ' + temp + '°C.');
        console.log('After resolve function in weather.js');
      }

    })
  });

}

console.log('Weather.js After module exports');
