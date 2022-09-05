const {User, Stock} = require('../models')

const getAllUsers= async (req,res)=>{
    try{
        const users=await User.findAll()
        res.send(users)
    }
    catch(error){
        throw error
    }
}

const getUserProfile = async (req,res) =>{
    try{
        let userId=req.params.user_id
        const userProfile= await User.findByPk(userId,{include:[{model:Stock}]})
        res.send(userProfile)
    }
    catch(error){
        throw error
    }
}

const createUser = async(req,res) =>{
    try{
        const newUser=await User.create(req.body)
        res.send(newUser)
    }
    catch(error){
        throw error
    }
}

const updateUser= async(req,res) =>{
    try{
        let userId=parseInt(req.params.user_id)
        let updatedUser=await User.update(req.body,{where:{id:userId}, returning:true})
        res.send(updatedUser)
    }
    catch(error){
        throw error
    }
}

const deleteUser=async(req,res) =>{
    try{
        let userId=parseInt(req.params.user_id)
        await User.destroy({where:{id:userId}, returning:true})
        res.send(`User with id of ${userId} successfully deleted`)
    }
    catch(error){
        throw error
    }
}


module.exports={
    getAllUsers,
    getUserProfile,
    createUser,
    updateUser,
    deleteUser
}