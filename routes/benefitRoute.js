const express = require('express');
const BenefitController = require('../controllers/benefitController');
const {benefitTableName} = require('../config');

const router = express.Router();
const benefitController = new BenefitController(benefitTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', benefitController.insertOne);
router.get('/:id', benefitController.selectById);
router.get('/', benefitController.selectAll);
router.patch('/:id', benefitController.updateById);
router.put('/:id', benefitController.updateById);
router.delete('/:id', benefitController.deleteById);

module.exports = router;