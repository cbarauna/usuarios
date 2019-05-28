const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const AddressController = require('./app/models/Address')

routes.post('/users', UserController.store)

routes.post('/address', AddressController)
module.exports = routes
