module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || '<CHANGE-ME>',
  SECRET_TOKEN: 'miclavedetokens'
}
