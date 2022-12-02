const express = require('express')
const { addUser, verifyEmail, forgetpassword, resetPassword, signin, signout, resendVerification, findUser, findUserbyEmail, userList, deleteUser } = require('../controller/userController')
const router = express.Router()

router.post('/register', addUser)
router.get('/confirm/:token', verifyEmail)
router.post('/forgetpassword/', forgetpassword)
router.post('/resetpassword/:token', resetPassword)
router.post('/signin', signin)
router.get('/signout', signout)
router.post('/resendverification', resendVerification)
router.get('/finduser/:id', findUser)
router.get('/finduserbyemail',findUserbyEmail)
router.get('/userlist', userList)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router