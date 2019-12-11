const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaShema = new Schema({
    Nombre: String,
    Apellido: String,
    Edad: String,
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tarea', tareaShema); 