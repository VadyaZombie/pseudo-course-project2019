const express = require('express');
const UserController = require('../controllers/userController');
const {userTableName} = require('../config');

const router = express.Router();
const userController = new UserController(userTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', userController.insertOne);
router.get('/:id', userController.selectById);
router.get('/', userController.selectAll);
router.patch('/:id', userController.updateById);
router.put('/:id', userController.updateById);
router.delete('/:id', userController.deleteById);

router.post('/registration', userController.registration);

module.exports = router;