const BaseController = require('./baseController');
const DischargeService = require('../services/dischargeService');


class DischargeController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.dischargeService = new DischargeService(tableName);

    }



}

module.exports = DischargeController;