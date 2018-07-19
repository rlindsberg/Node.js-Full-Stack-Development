var urlAPI = "https://ipinfo.io?token=2fd77d365b9c8e"

module.exports = function() {
  return new Promise(function(resolve, reject) {
    request({
      url: urlAPI,
      json: true
    }, function(error, respons, body){
      if (error) {
        reject(error);
        return;
      } else {  //if no error
        console.log('Location lookup successed.');
        resolve(body.city);
      }
    })
  });

}
