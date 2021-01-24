const router = require('express').Router();

const {getUsers, getUser, createUser, deleteUser} = require('../controllers/users.controller')

router.route('/')
.get(getUsers)
.post(createUser)

//http://localhost:4000/api/users/1
router.route('/:id')
.get(getUser)
.delete(deleteUser)



module.exports = router