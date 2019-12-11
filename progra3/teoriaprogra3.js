var express =  require ( ' express ' );

aplicación var =  express ();

servidor var =  aplicación . escuchar ( 3000 , () => {
    consola . log ( 'el servidor se está ejecutando en el puerto ' , servidor . dirección (). puerto );
   });

aplicación . use ( express . static ( __dirname ));

var mongoose =  require ( ' mangosta ' );

var dbUrl =  ' mongodb + srv: // lcordero: P4ssw0rd@progra3-oh8l9.mongodb.net/test? retryWrites = true & w = mayoría '

mangosta . connect (dbUrl, ( err ) => {
    consola . log ( ' mongodb conectado ' , err);
 })

 var Todo =  mangosta . modelo ( ' Todo ' , {nombre :  Cadena , descripción :  Cadena })

var bodyParser =  require ( ' body-parser ' )
aplicación . use ( bodyParser . json ());
aplicación . use ( bodyParser . urlencoded ({extended :  false }))


aplicación . get ( ' / todos ' , ( req , res ) => {
    Todo . find ({}, ( err , todos ) => {
      res . enviar (todos);
    })
  })

aplicación . post ( ' / todos ' , ( req , res ) => {
    var todo =  nuevo  Todo ( req . cuerpo );
    TODO . guardar (( err ) => {
      si (err)
        sendStatus ( 500 );
      res . sendStatus ( 200 );
    })
  })