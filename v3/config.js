module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://progra:progra@cluster0-ga142.mongodb.net/practica?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}