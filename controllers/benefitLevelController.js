const BaseController = require('./baseController');
const BenefitLevelService = require('../services/benefitLevelService');


class BenefitLevelController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.benefitLevelService = new BenefitLevelService(tableName);

    }

}

module.exports = BenefitLevelController;