const Router=require('express').Router()
const controller=require('../controllers/NoteController')

Router.get('/:note_id',controller.getUserNotes)
Router.post('/:user_id',controller.createUserNotes)
Router.put('/:note_id',controller.updateNote)
Router.delete('/:note_id',controller.deleteNote)





module.exports=Router