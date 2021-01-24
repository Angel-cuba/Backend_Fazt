const express = require('express');
const cors = require('cors')
const app = express();

//settings
app.set('port', process.env.PORT || 4000)


//middlewares
//Utilizar el CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}))



//routes
// app.use('/', (req,res)=>{
//           res.send('Inicio de las rutas')
// })
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))



module.exports = app