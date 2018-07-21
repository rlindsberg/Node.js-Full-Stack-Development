var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //heroku port or local port 3000

var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed : false
  }, {
    id: 2,
    description: 'Go to market',
    completed: false
  }
];

app.get('/', function(req, res) {
  res.send('To do API root');
});

//GET /todos
app.get('/todos', function(req, res) {
  res.json(todos);
});

//GET /todos/<:id>

app.listen(PORT, function() {
  console.log('Express server listening at: 127.0.0.1:' + PORT);
})
