request = require('request');

function getWeather(location) {
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
        resolve('The current temperature in ' + city + ' is ' + temp + '°C.');
        console.log('After resolve function in weather.js');
      }

    })
  });

}

getWeather('new york').then(function(weather) {
  console.log(weather);
}, function(error) {
  console.log(error);
});

//promises eg. This demonstrates that error prints out sooner than weather
function doWorkPromise(data) {
  return new Promise(function(resolve, reject) {
    if (data === 'some data') {
      resolve('Work is done!')
    } else if (data === 'no data') {
      reject({'error': 'Work error!'}) //return an object, so that multiple attr. can be returned
    }
  });
}

doWorkPromise('no data').then(function(data) {
  console.log(data);
}, function (error) {
  console.log(error);
  console.log('\n');
}); //first resolve, second reject
