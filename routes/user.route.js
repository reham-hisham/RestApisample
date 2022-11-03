const express = require("express");
const router = express.Router();
const userAuth = require("../midleware/UserAuth");
const userController = require( "../controller/user.controller" );

router.post('/login', userController.login)
router.post('/register', userController.add)
router.get('/All',userAuth, userController.allProduct)

module.exports = router;
