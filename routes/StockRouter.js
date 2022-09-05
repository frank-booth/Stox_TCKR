const Router = require('express').Router()
const controller=require('../controllers/StockController')

Router.get('/:stock_id',controller.getUserStock)
Router.post('/:user_id',controller.createUserStocks)
Router.put('/:stock_id',controller.updateStock)
Router.delete('/:stock_id',controller.deleteStock)


module.exports=Router