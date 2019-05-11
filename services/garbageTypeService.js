const GarbageTypeModel = require('../models/garbageTypeModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class GarbageTypeService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.garbageTypeModel = new GarbageTypeModel(tableName);
    }


}

module.exports = GarbageTypeService;