'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')
const path = require('path');
const viewsPath = path.join(__dirname+'/views/')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'html')

app.use('/assets', [
  express.static(__dirname + '/node_modules/jquery/dist/'),
  express.static(__dirname + '/node_modules/socket.io-client/dist/')
]);

app.use('/api', api)
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/product', (req, res) => {
  res.sendFile(path.join(viewsPath+'product.html'));
})

app.get('/tarjeta', (req, res) => {
  res.sendFile(path.join(viewsPath+'tarjeta.html'));
})

app.get('/NuevoMenu', (req, res) => {
  res.sendFile(path.join(viewsPath+'NuevoMenu.html'));
});


app.get('/form', (req, res) => {
  res.sendFile(path.join(viewsPath+'form.html'));
})


module.exports = app
