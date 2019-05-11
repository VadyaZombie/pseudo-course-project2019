const BaseController = require('./baseController');
const BenefitService = require('../services/benefitService');


class BenefitController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.benefitService = new BenefitService(tableName);

    }

}

module.exports = BenefitController;