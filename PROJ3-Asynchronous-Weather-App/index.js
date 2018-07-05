request = require('request');
var urlAPI = 'https://samples.openweathermap.org/data/2.5/weather?q=Stockholm,SE&appid=b6907d289e10d714a6e88b30761fae22';

//takes two parameters
request({
  url: urlAPI,
  json: true
}, function(error, respons, body){
  if (error) {
    console.log('Unable to fetch weather.');
  } else {  //if no error
    console.log(JSON.stringify(body, null, 4));
  }


})
