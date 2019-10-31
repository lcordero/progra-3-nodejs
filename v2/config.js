module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://jairo11:stefanny11@cluster0-orxmw.mongodb.net/test?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}

