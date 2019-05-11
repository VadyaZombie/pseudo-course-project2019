const BinModel = require('../models/binModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class BinService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.binModel = new BinModel(tableName);
    }


}

module.exports = BinService;