function doWork(shouldFail) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof shouldFail === 'boolean' && shouldFail === true) { //no arg provided should also return resolve
        reject('failed!');
      } else {
        resolve('successed!');
      }
    }, 1000);
  });
}

doWork().then(function(successMessage) {
  console.log(successMessage);
  return doWork(true); //fire up another doWork after resolve.
}).then(function(successMessage) {
    console.log('second ' + successMessage);
  }).catch(function(error) {
    console.log(error);
  });


//Begin challenge
request = require('request');
var urlAPI = "https://ipinfo.io?token=2fd77d365b9c8e"

function getLocation() {
  return new Promise(function(resolve, reject) {
    request({
      url: urlAPI,
      json: true
    }, function(error, respons, body){

      if (error) {
        reject(error);
        return;
      } else {  //if no error
        console.log('Location loopup successed. I guess that you\'re from:');
        console.log(body.city + '\n');
        resolve(body.city);
      }

    })
  });
}



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


getLocation();
