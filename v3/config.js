module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://anthony_re:anthony042000@cluster0-r90l1.mongodb.net/test?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}