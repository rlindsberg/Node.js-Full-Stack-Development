var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000; //heroku port or local port 3000

var todos = [];
var todoNextId = 1;

//add middleware to parse json to req.body
app.use(bodyParser.json());

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
  var body = req.body; //object
  body.id = todoNextId++; //add id to body first, then increment it by 1.
  todos.push(body);
  res.send(body);

});

app.listen(PORT, function() {
  console.log('Express server listening at: 127.0.0.1:' + PORT);
})
