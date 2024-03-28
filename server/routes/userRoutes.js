const express = require('express');
const registerController = require("../controller/userController");
const loginController = require('../controller/loginController');
const updatePassword = require("../controller/updatePassword");

const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.put('/changepassword',updatePassword)


module.exports = router