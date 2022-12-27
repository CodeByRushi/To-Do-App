const express = require('express');

//require the controller file
const controller = require('../controllers/index.js');

//router helps us to separate routes and controller
const router = express.Router();

router.get('/', controller.home);
router.post('/add', controller.create_todo);
router.get('/delete', controller.delete_todo);
router.get('/update',controller.updateForm);
router.post('/edit-todolist', controller.updateToDoList);
module.exports = router;