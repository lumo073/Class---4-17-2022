const { testFunction } = require("../controller/testcontroller");
const express = require('express')
const router = express.Router()


router.get('/test', testFunction)

module.exports = router