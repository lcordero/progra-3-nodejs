

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

      client.on('new_datos', function(datos) {
        console.log(datos)
        client.emit('new_datos', datos);
        client.broadcast.emit('new_datos', datos);
      });

      client.on('message', function(msg) {
          console.log(msg)
          client.send(msg);
          client.broadcast.send(msg);
      });

      client.on('disconnect', function() {
          console.log('Desconectado');
      });
  });
})


(function () {

  //
  // Conexión
  //

  // Crear un nuevo socket.
  const socket = io();

  //
  // Interfaz
  //

  // Se ha recibido un mensaje de otro usuario.
  function addMsg (data) {
    const { username, value } = data;
    $('#list').append(
      `<p><b>${username}</b>: ${value}</p>`
    );
  }

  // Tratar de enviar un nuevo mensaje.
  function sendMsg () {
    const data = {
      username: $('#username').val(),
      value: $('#value').val()
    };

    if (!data.value) return;

    // Enviar mensaje a otros usuarios.
    socket.emit('new:message', data);

    // Agregar el propio mensaje a la interfaz.
    addMsg(data);

    $('#value').val('').focus();
  }

  //
  // Eventos
  //

  // Al recibir un mensaje de otro usuario desde el servidor.
  socket.on('new:message', function (data) {
    addMsg(data);
  });

  // Al hacer click en el botón de enviar.
  $('#send').on('click', function () {
    sendMsg();
  });

  // Al presionar la tecla ENTER.
  $('#value').on('keypress', function (event) {
    if (event.which === 13) {
      sendMsg();
    }
  });

})();