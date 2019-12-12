module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://isacc:isacc123@cluster0-bwsmj.mongodb.net/test?retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}