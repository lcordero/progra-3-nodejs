'use strict'

const express = require('express')
const userCtrl = require('../controllers/user')
const api = express.Router()

api.get('/users', userCtrl.getUsers)
api.put('/user/:userId', userCtrl.updateUser)
api.delete('/user/:userId', userCtrl.deleteUser)
module.exports = api
