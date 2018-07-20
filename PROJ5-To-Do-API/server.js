var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //heroku port or local port 3000

app.get('/', function(req, res) {
  res.send('To do API root');
});

app.listen(PORT, function() {
  console.log('Express server listening at: 127.0.0.1:' + PORT);
})
