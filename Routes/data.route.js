const express = require("express");
const router =  express.Router();
const sendMessage = require("../controller/dataController");
const validationForm = require("../middleware/validation")

router.post("/api/message" , validationForm , sendMessage);

module.exports = router;