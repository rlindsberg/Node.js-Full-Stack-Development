var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello Express!');
  }
);

app.get('/about-us', function(req, res) {
    res.send('About Us!')
  }
);


app.listen(3000);
