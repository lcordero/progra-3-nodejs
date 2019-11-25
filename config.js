module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://katherine-g:Kakaka111@cluster0-4vspk.mongodb.net/test?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}
