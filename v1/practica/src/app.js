const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

//conectar mongodb
const mongoose = require('mongoose');

 

mongoose.connect('mongodb+srv://isacc:isacc123@cluster0-bwsmj.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log("DB conectada"))
    .catch(err => console.log(err));
    


//importar rutas
const indexRoutes =  require('./routes/index');



//settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//rutas
app.use('/', indexRoutes);

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});