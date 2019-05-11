const BenefitLevelModel = require('../models/benefitLevelModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class BenefitLevelService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.benefitLevelModel = new BenefitLevelModel(tableName);
    }


}

module.exports = BenefitLevelService;