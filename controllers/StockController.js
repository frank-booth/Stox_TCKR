const {Stock,User}=require('../models')

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

module.exports={
    createUserStocks
}