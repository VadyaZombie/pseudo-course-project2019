const DischargeModel = require('../models/dischargeModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class DischargeService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.dischargeModel = new DischargeModel(tableName);
    }


}

module.exports = DischargeService;