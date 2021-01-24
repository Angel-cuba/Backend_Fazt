const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const noteSchema = new Schema({
          title: String,
          content : {
                    type: String,
                    required: true
          },
          author: String,
          date: {
                    type: Date,
                    default: Date.now
          }
}, {
          timestamps: true
})

const Note = mongoose.model( 'Note', noteSchema, 'notes');

module.exports = Note;