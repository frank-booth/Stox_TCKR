const Router=require('express').Router()
const UserRouter=require('./UserRouter')
const StockRouter=require('./StockRouter')
const NoteRouter=require('./NoteRouter')

Router.use('/users', UserRouter)
Router.use('/stocks', StockRouter)
Router.use('/notes', NoteRouter)



module.exports=Router 