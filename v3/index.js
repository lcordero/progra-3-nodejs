'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const io = require('socket.io');
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')
  

  let socket = io.listen(
    app.listen(config.port, () => {
      console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
  );

  socket.on('connection', function(client) {
      client.send("nueva conexion");
      client.broadcast.send("nueva conexion");

      client.on('new_product', function(product) {
        console.log(product)
        client.emit('new_product', product);
        client.broadcast.emit('new_product', product);
      });

      client.on('message', function(msg) {
          console.log(msg)
          client.send(msg);
          client.broadcast.send(msg);
      });

      client.on('tarjeta_clicked', function(tarjeta) {
        console.log(tarjeta)
        client.emit('refresh_tarjeta', tarjeta);
        client.broadcast.emit('refresh_tarjeta', tarjeta);
      });

      client.on('form_changed', function(form) {
        console.log(form)
        client.emit('refresh_form', form);
        client.broadcast.emit('refresh_form', form);
      });

      client.on('disconnect', function() {
          console.log('Desconectado');
      });
  });
})

