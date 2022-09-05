const {Stock,User}=require('../models')


const getUserStock = async(req,res) =>{
    try{
        let stockId=req.params.stock_id
        const stock= await Stock.findByPk(stockId)
        res.send(stock)
    }
    catch(error){
        throw error
    }
}

const createUserStocks = async (req,res) => {
    try{
        let userId=parseInt(req.params.user_id)
        let newStock={userId,...req.body}
        let stock = await Stock.create(newStock)
        res.send(newStock)
    }
    catch(error){
        throw error
    }
}

const updateStock= async(req,res) =>{
    try{
        let stockId=parseInt(req.params.stock_id)
        let updatedStock=await Stock.update(req.body,{where:{id:stockId}, returning:true})
        res.send(updatedStock)
    }
    catch(error){
        throw error
    }
}

const deleteStock=async(req,res) =>{
    try{
        let stockId=parseInt(req.params.stock_id)
        await Stock.destroy({where:{id:stockId}, returning:true})
        res.send(`Stock with id of ${stockId} successfully deleted`)
    }
    catch(error){
        throw error
    }
}

module.exports={
    getUserStock,
    createUserStocks,
    updateStock,
    deleteStock
}