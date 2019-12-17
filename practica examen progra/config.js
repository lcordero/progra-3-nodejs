module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URI || 'mongodb+srv://ik012616:Kuchikirukia1@cluster0-9r7ib.mongodb.net/test?retryWrites=true&w=majority',
    SECRET_TOKEN: 'miclavedetokens'
  }