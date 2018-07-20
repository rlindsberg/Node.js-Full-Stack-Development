var express = require('express');
var app = express();
let port = 3000;

//route-level middleware
var middleware = {
    requireAuthentication: function(req, res, next) {
      console.log('Private route hit');
      next();
    },
    logger: function(req, res, next) {
      var date = new Date().toString();
      var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(ip + ' - - [' + date + '] ' + req.method + ' ' + req.originalUrl);
      next();
    }
};

app.use(middleware.logger); //app-level

app.get('/about-us', middleware.requireAuthentication, function(req, res) {
    res.send('About Us!')
  }
);

//expose a folder
app.use(express.static(__dirname + '/public_html')) //index.html is default


app.listen(port, function() {
    console.log('Express server listening at: 127.0.0.1:' + port);
});
