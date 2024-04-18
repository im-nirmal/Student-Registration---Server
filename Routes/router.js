const express = require('express')
const userController = require('../Controllers/userController')

const router = new express.Router()

//register
router.post('/register',userController.register)

//get students
router.get('/details',userController.getStudents)


module.exports = router