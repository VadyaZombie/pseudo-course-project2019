const express = require('express');
const BenefitsController = require('../controllers/benefitsController');
const {benefitsTableName} = require('../config');

const router = express.Router();
const benefitsController = new BenefitsController(benefitsTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', benefitsController.insertOne);
router.get('/byBenefitLevelId/:id', benefitsController.selectByBenefitLevelId);
router.get('/', benefitsController.selectAll);
// router.patch('/:id', benefitsController.updateByBenefitLevelId);
// router.delete('byBenefitLevelId/:id', benefitsController.deleteByBenefitLevelId);
// router.delete('byBenefitId/:id', benefitsController.deleteByBenefitId);

module.exports = router;