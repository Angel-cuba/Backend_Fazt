const userCtrl = {};


const User = require('../models/User')


userCtrl.getUsers = async (req, res) => {

          const users = await User.find()
          res.json(users)
}

userCtrl.createUser =async  (req, res) => {
      const body = req.body;
          try {
                    const newUser = new User(body)
                    await newUser.save()
          } catch (error) {
                    console.log(error);
          }
          
          res.json({message: 'Usuario guardado'})    
}

userCtrl.getUser = async (req, res) => {
          const id = req.params.id
  
  try {
            const usersDB = await User.findOne({_id : id })

            res.render('id', {
                      userID : usersDB,
                      error: false
            })
  } catch (error) {
            
  }

}


userCtrl.deleteUser = (req, res) => res.send('Users Routes') 


module.exports = userCtrl;