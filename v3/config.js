module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://alonso-v:Sito1199@cluster0-hunby.mongodb.net/usuario?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}