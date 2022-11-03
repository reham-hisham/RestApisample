const express = require("express");
const router = express.Router();
const userAuth = require("../midleware/UserAuth");
const userController = require( "../controller/user.controller" );

router.post('/login', userController.login)
router.post('/register', userController.add)



module.exports = router;
