const express = require('express');

//require the controller file
const controller = require('../controllers/index.js');

//router helps us to separate routes and controller
const router = express.Router();

router.get('/', controller.home);

module.exports = router;