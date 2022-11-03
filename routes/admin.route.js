const express = require("express");
const router = express.Router();
const adminAuth = require("../midleware/adminAuth");
const adminController = require("../controller/admin.controller");

router.post("/add", adminController.addProduct);
router.delete("/delete/:id",adminController.delete)
router.put('/update/:id',adminController.update)

module.exports = router;
