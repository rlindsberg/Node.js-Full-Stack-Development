var request = require('request');

module.exports = function getEurPerSekRate() {
  return new Promise(function(resolve, reject){
    var urlAPI = 'http://data.fixer.io/api/latest?access_key=721f2afa95322f0e29712f56dff73ebb&symbols=SEK&format=1';
    request({
      url: urlAPI,
      json: true
      }, function(error, respons, body) {
        if (error) {
          reject('Unable to fetch real-time rates from flixer.io. Please try again later.');
        } else if (body.success == 'false') {
          reject(body.error.type);
        } else {
            var rate = body.rates.SEK;
            console.log('The rate of EUR/SEK is: ' + rate);
            resolve(rate);
        }
      }
    ) //end request
  }); //end promise
}
