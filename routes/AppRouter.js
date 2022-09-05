const Router=require('express').Router()
const UserRouter=require('./UserRouter')
const StockRouter=require('./StockRouter')

Router.use('/users', UserRouter)
Router.use('/stocks', StockRouter)



module.exports=Router 