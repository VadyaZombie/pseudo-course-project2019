const BaseController = require('./baseController');
const CollectionPointService = require('../services/collectionPointService');


class CollectionPointController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.collectionPointService = new CollectionPointService(tableName);

    }

}

module.exports = CollectionPointController;