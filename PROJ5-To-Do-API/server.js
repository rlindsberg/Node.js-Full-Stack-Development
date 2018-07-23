var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //heroku port or local port 3000

var todos = [];
var todoNextId = 1;

app.get('/', function(req, res) {
  res.send('To do API root');
});

//GET /todos
app.get('/todos', function(req, res) {
  res.json(todos);
});

//GET /todos/<:id>
app.get('/todos/:id', function(req, res) {
  var todoID = req.params.id; //is a string
  if (todoID > todos.length) { //no such todo id
    res.status(404).send();
  } else {
    res.json(todos[todoID - 1]); //id: 1 = todos[0]
  }
});

//POST /todos
app.post('/todos', function(req, res) {
  
});

app.listen(PORT, function() {
  console.log('Express server listening at: 127.0.0.1:' + PORT);
})
