var express = require('express');

var app = express();

var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });

app.use(express.static(__dirname));

var mongoose = require('mongoose');

var dbUrl = "mongodb+srv://anthony_re:06thonypass@cluster0-r90l1.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(dbUrl , (err) => { 
    console.log('mongodb connected',err);
 })

 var Todo = mongoose.model('Todo',{ name : String, description : String})

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.get('/todos', (req, res) => {
    Todo.find({},(err, todos)=> {
      res.send(todos);
    })
  })

app.post('/todos', (req, res) => {
    var todo = new Todo(req.body);
    todo.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })