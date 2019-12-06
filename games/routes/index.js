'use strict'

const express = require('express')
const messageCtrl = require('../controllers/message')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/msg', messageCtrl.getMsg)
api.get('/msg/:msgId', messageCtrl.getMsgs)
api.post('/msg', messageCtrl.saveMsg)
api.put('/msg/:msgId', messageCtrl.updateMsg)
api.delete('/msg/:messageId', messageCtrl.deleteMsg)

module.exports = api