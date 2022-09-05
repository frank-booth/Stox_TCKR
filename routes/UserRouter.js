const Router = require('express').Router()
const controller=require('../controllers/UserController')


Router.get('/',controller.getAllUsers)
Router.get('/:user_id', controller.getUserProfile)
Router.post('/',controller.createUser)

module.exports=Router