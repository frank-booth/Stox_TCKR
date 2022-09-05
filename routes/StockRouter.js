const Router = require('express').Router()
const controller=require('../controllers/StockController')

Router.post('/:user_id',controller.createUserStocks)


module.exports=Router