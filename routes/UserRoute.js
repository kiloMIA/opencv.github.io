const express = require('express')
const userController = require('../controllers/UserController')
const router = express.Router();
router
    .get("/", userController.findAll)
    .get('/:id', userController.findOne)
    .patch('/:id', userController.update)
    .delete('/:id', userController.destroy);
module.exports = router