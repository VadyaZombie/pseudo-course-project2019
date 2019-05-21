const express = require('express');
const UserController = require('../controllers/userController');
const {userTableName} = require('../config');

const {bodyHandler} = require('../middleware/error_handlers/error_handlers');

const router = express.Router();
const userController = new UserController(userTableName);

//router.post('/', bodyHandler.bodyIsJSON())

router.post('/', bodyHandler.bodyIsJSON(), userController.insertOne);
router.get('/:id', userController.selectById);
router.get('/', userController.selectAll);
router.patch('/:id', bodyHandler.bodyIsJSON(), userController.updateById);
router.put('/:id', bodyHandler.bodyIsJSON(), userController.updateById);
router.delete('/:id', userController.deleteById);

router.post('/registration', bodyHandler.bodyIsJSON(), userController.registration);
router.post('/auth', bodyHandler.bodyIsJSON(), userController.auth);


module.exports = router;