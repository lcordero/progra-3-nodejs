module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://Cristhofer:cristhofer12@cluster0-ctmhh.mongodb.net/usuario?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}