const BenefitsModel = require('../models/benefitsModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class BenefitsService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.benefitsModel = new BenefitsModel(tableName);
    }

    async selectByBenefitLevelId(benefitLevelId) {
        return await this.benefitsModel.selectByBenefitLevelId(benefitLevelId)
    }

}

module.exports = BenefitsService;