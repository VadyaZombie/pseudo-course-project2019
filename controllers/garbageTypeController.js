const BaseController = require('./baseController');
const GarbageTypeService = require('../services/garbageTypeService');


class GarbageTypeController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.garbageTypeService = new GarbageTypeService(tableName);

    }



}

module.exports = GarbageTypeController;