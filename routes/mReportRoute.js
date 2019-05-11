const express = require('express');
const MReportController = require('../controllers/mReportController');
const {monthlyReportTableName} = require('../config');

const router = express.Router();
const mReportController = new MReportController(monthlyReportTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', mReportController.insertOne);
router.get('/:id', mReportController.selectById);
router.get('/', mReportController.selectAll);
router.patch('/:id', mReportController.updateById);
router.put('/:id', mReportController.updateById);
router.delete('/:id', mReportController.deleteById);

module.exports = router;