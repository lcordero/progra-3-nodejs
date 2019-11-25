var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});



var mongoose = require('mongoose');

var dbUrl = "mongodb+srv://katherine-g:kakaka111@cluster0-4vspk.mongodb.net/practica?retryWrites=true&w=majority"

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb connected', err);
})


var Users = mongoose.model('usuarios', { name: String, number: String })

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/users', (req, res) => {
    Users.find({}, (err, Users) => {
        res.send(Users);
    })

})

app.post('/formulario', (req, res) => {
    var user = new formulario(req.body);
    user.save((err) => {
        if (err)
            sendStatus(500);
        res.sendStatus(200);
    })
    
})