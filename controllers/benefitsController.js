const BaseController = require('./baseController');
const BenefitsService = require('../services/benefitsService');


class BenefitsController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.benefitsService = new BenefitsService(tableName);

        this.selectByBenefitLevelId = this.selectByBenefitLevelId.bind(this);
    }

    async selectByBenefitLevelId(req, res) {
        try {
            let result = await this.benefitsService.selectByBenefitLevelId(req.params.id);
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }

}

module.exports = BenefitsController;