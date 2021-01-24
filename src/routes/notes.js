const router = require('express').Router();

const {getNotes, createNotes, getNote, upDateNote, deleteNote} = require('../controllers/notes-controller')

router.route('/')
.get(getNotes)
.post(createNotes)


// //Rutas para hacer el UPDATE y el DELETE
   router.route('/:id')
   .get(getNote)
  .put(upDateNote)
   .delete(deleteNote)

module.exports = router