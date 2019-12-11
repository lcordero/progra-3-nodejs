const express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
// consola
var server = app.listen(3000, () => {
    console.log(`SERVIDOR CONECTADO PORT`, server.address().port);
});

app.set('vistas',path.join(__dirname + 'vistas'));


app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// mongoose

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://exa:exa123@cluster0-i3pny.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log('DB CONECTADA'))
    .catch(err => console.log('err'));

var tarea = mongoose.model('tarae', {Nombre:String, Edad:String, fecha: Date })



// rutas y exportar
const indexRoutes = require('./index');
// ruta
app.use('/',indexRoutes );
