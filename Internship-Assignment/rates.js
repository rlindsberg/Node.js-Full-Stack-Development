var request = require('request');

module.exports = function getEurPerSekRate() {
  return new Promise(function(resolve, reject){
    var urlAPI = 'http://data.fixer.io/api/latest?access_key=721f2afa95322f0e29712f56dff73ebb&symbols=SEK&format=1';
    request({
      url: urlAPI,
      json: true
      }, function(error, respons, body) {
        resolve(JSON.stringify(body, null, 4));
      }
    ) //end request
  }); //end promise
}
