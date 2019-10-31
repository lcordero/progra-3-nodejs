module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://<user>:<Password>@<server>.mongodb.net/<DB>',
  SECRET_TOKEN: 'miclavedetokens'
}