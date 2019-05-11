const express = require('express');
const GarbageTypeController = require('../controllers/garbageTypeController');
const {garbageTypeTableName} = require('../config');

const router = express.Router();
const garbageTypeController = new GarbageTypeController(garbageTypeTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', garbageTypeController.insertOne);
router.get('/:id', garbageTypeController.selectById);
router.get('/', garbageTypeController.selectAll);
router.patch('/:id', garbageTypeController.updateById);
router.put('/:id', garbageTypeController.updateById);
router.delete('/:id', garbageTypeController.deleteById);

module.exports = router;