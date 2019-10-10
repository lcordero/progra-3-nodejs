var express = require('express');

var app = express();

var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });

app.use(express.static(__dirname));

var mongoose = require('mongoose');

var dbUrl = 'mongodb+srv://isaaczb12:Ccxx745z@progra-3-lvfu9.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(dbUrl , (err) => { 
    console.log('mongodb connected',err);
 })

 var User = mongoose.model('User',{ Nombre : String, Apellido : String, Edad: String, Sexo: String, Action: String})

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

err
app.get('/users', (req, res) => {
    Todo.find({},(err, users)=> {
      res.send(users);
    })
  })

app.post('/users', (req, res) => {
    var user = new User(req.body);
    user.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })