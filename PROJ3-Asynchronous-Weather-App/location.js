var urlAPI = "https://ipinfo.io?token=2fd77d365b9c8e"

module.exports = function(callback) {
  request({
    url: urlAPI,
    json: true
  }, function(error, respons, body){
    // console.log('error:');
    // console.log(error);
    // console.log('respons');
    // console.log(respons);
    // console.log('body:');
    // console.log(body);

    if (error) {
      callback(error);
      return;
    } else {  //if no error
      console.log('no error');
      callback(body);
    }

  })
}
