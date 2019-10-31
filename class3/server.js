var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});



var mongoose = require('mongoose');

var dbUrl = 'mongodb+srv://isaaczb12:Ccxx745z@progra-3-lvfu9.mongodb.net/practice?retryWrites=true&w=majority'

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb connected', err);
})


var Practices = mongoose.model('practices', { name: String, message: String })

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/practices', (req, res) => {
    Practices.find({}, (err, Practices) => {
        res.send(Practices);
    })
})

app.post('/practices', (req, res) => {
    var practices = new Practices(req.body);
    practices.save((err) => {
        if (err)
            sendStatus(500);
        res.sendStatus(200);
    })
})