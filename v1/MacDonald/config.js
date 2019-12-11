module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI || 'mongodb+srv://MacDonald:mac123@cluster0-tenpe.mongodb.net/test?retryWrites=true&w=majority',
    SECRET_TOKEN: 'miclavedetokens'
  }