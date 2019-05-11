const express = require('express');
const BinController = require('../controllers/binController');
const {binTableName} = require('../config');

const router = express.Router();
const binController = new BinController(binTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', binController.insertOne);
router.get('/:id', binController.selectById);
router.get('/', binController.selectAll);
router.patch('/:id', binController.updateById);
router.put('/:id', binController.updateById);
router.delete('/:id', binController.deleteById);

module.exports = router;