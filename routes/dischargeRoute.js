const express = require('express');
const DischargeController = require('../controllers/dischargeController');
const {dischargeTableName} = require('../config');

const router = express.Router();
const dischargeController = new DischargeController(dischargeTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', dischargeController.insertOne);
router.get('/:id', dischargeController.selectById);
router.get('/', dischargeController.selectAll);
router.patch('/:id', dischargeController.updateById);
router.put('/:id', dischargeController.updateById);
router.delete('/:id', dischargeController.deleteById);

module.exports = router;