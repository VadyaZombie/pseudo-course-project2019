const express = require('express');
const CollectionPointController = require('../controllers/collectionPointController');
const {collectionPointTableName} = require('../config');

const router = express.Router();
const collectionPointController = new CollectionPointController(collectionPointTableName);

//router.post('/', bodyHandler.bodyIsJSON())


router.post('/', collectionPointController.insertOne);
router.get('/:id', collectionPointController.selectById);
router.get('/', collectionPointController.selectAll);
router.patch('/:id', collectionPointController.updateById);
router.put('/:id', collectionPointController.updateById);
router.delete('/:id', collectionPointController.deleteById);

module.exports = router;