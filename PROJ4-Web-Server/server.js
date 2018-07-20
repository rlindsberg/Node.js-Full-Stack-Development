//express.js
var express = require('express');
var app = express();
let port = 3000;
//middleware
var middleware = require('./middleware.js')


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
