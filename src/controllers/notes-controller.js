const notesCtrl = {};

const Note = require('../models/Note')



notesCtrl.getNotes = async (req,res) => {
          
          const notes = await Note.find()
          res.json(notes)
}

notesCtrl.createNotes =async (req,res) => {
    
     // const {title, content, date, author } = req.body;
     const body = req.body;
    try {  
           const newNote = new Note(body)
         await newNote.save()
    } catch (error) {
         console.log(error);
    }
     res.json({message: 'Nota guardada'})
}

notesCtrl.getNote = async(req,res) =>{
     const id = req.params.id

     try {
          const noteDB = await Note.findOne({_id : id })

          res.render('id', {
               noteID : noteDB,
               error: false
          }) 
     } catch (error) {
          
     }
}

notesCtrl.upDateNote = async(req,res) =>{
     //res.json({message: 'Nota actualizada'})
     const id = req.params.id
     const body = req.body

     try {
           const noteDb = await Note.findByIdAndUpdate(
                id, body, { useFindAndModify: false})
             

             res.json({
                  estado:true,
                  mensaje: 'Todo OK'
             })

     } catch (error) {
          console.log(error);
     }


}

notesCtrl.deleteNote  = async (req,res) => {
             const id = req.params.id

             try {
                  const noteDB = await Note.findByIdAndDelete({_id:id})


                  if(noteDB){
                       res.json({
                            estado : true,
                            mensaje : 'Nota eliminada'
                       })
                  }else{
                       res.json({
                            estado : false,
                            mensaje : 'Hubo un fallo al eliminar la nota'
                       })
                  }
             } catch (error) {
                  
             }
}


module.exports = notesCtrl;