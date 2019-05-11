const express = require('express');
const BenefitLevelController = require('../controllers/benefitLevelController');
const {benefitLevelTableName} = require('../config');

const router = express.Router();
const benefitLevelController = new BenefitLevelController(benefitLevelTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', benefitLevelController.insertOne);
router.get('/:id', benefitLevelController.selectById);
router.get('/', benefitLevelController.selectAll);
router.patch('/:id', benefitLevelController.updateById);
router.put('/:id', benefitLevelController.updateById);
router.delete('/:id', benefitLevelController.deleteById);

module.exports = router;