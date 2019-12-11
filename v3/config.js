module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://progra:progra123@practica3-gtpd7.mongodb.net/test?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}