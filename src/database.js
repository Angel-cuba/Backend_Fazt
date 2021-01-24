const mongoose = require('mongoose')


// console.log(process.env.MONGO_URI);
const uri = process.env.MONGO_URI;
const uri1 = 'mongodb://127.0.0.1:27017/veterinaria'

mongoose.connect(uri1, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology:true
})


const conect=mongoose.connection

conect.once('open', ()=> {
          console.log('Base de Mongo conectada desde mi localhost');
})