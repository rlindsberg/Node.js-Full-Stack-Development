var urlAPI = "https://ipinfo.io?token=2fd77d365b9c8e"

module.exports = function(callback) {
  request({
    url: urlAPI,
    json: true
  }, function(error, respons, body){
    if (error) {
      callback('Unable to fetch location.');
    } else {  //if no error
      callback(body);
    }

  })
}
