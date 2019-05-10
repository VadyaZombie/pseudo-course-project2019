const express = require('express');
const DepartmentController = require('../controllers/departmentController');
const {departmentTableName} = require('../config');

const router = express.Router();
const departmentController = new DepartmentController(departmentTableName);

//router.post('/', bodyHandler.bodyIsJSON())

router.post('/', departmentController.insertOne);
router.get('/:id', departmentController.selectById);
router.get('/', departmentController.selectAll);
router.patch('/:id', departmentController.updateById);
router.put('/:id', departmentController.updateById);
router.delete('/:id', departmentController.deleteById);

module.exports = router;