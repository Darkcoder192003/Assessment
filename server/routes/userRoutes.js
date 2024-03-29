const express = require('express');
const registerController = require("../controller/userController");
const loginController = require('../controller/loginController');
const updatePassword = require("../controller/updatePassword");
const users = require('../controller/users');
const loginUser = require("../controller/loginUser");
const fetchuser = require("../middleware/fetchuser");

const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.put('/changepassword',updatePassword)
router.get('/users',users)
router.post('/getuser',fetchuser,loginUser)


module.exports = router