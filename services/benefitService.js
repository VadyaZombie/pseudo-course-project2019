const BenefitModel = require('../models/benefitModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class BenefitService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.benefitModel = new BenefitModel(tableName);
    }


}

module.exports = BenefitService;