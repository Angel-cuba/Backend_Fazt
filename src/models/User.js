const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
          name: String,
          username:String,
          email:  {
                type: String,
                required: true,
                trim: true,
                unique: true
          },
          password: String
          
}, {
          timestamps: true
})

const User = mongoose.model('User', userSchema, 'usuarios')

module.exports = User;