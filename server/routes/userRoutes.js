const express = require('express');
const registerController = require("../controller/userController");
const loginController = require('../controller/loginController')

const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)


module.exports = router