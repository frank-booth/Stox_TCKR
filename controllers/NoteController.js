const {Note,User}=require('../models')

const getUserNotes = async(req,res) =>{
    try{
        let noteId=req.params.note_id
        const note= await Note.findByPk(noteId)
        res.send(note)
    }
    catch(error){
        throw error
    }
}

const createUserNotes = async (req,res) => {
    try{
        let userId=parseInt(req.params.user_id)
        let newNote={userId,...req.body}
        let note = await Note.create(newNote)
        res.send(newNote)
    }
    catch(error){
        throw error
    }
}

const updateNote= async(req,res) =>{
    try{
        let noteId=parseInt(req.params.note_id)
        let updatedNote=await Note.update(req.body,{where:{id:noteId}, returning:true})
        res.send(updatedNote)
    }
    catch(error){
        throw error
    }
}

const deleteNote=async(req,res) =>{
    try{
        let noteId=parseInt(req.params.note_id)
        await Note.destroy({where:{id:noteId}, returning:true})
        res.send(`Note with id of ${noteId} successfully deleted`)
    }
    catch(error){
        throw error
    }
}


module.exports={
    getUserNotes,
    createUserNotes,
    updateNote,
    deleteNote
}