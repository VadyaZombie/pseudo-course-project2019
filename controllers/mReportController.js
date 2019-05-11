const BaseController = require('./baseController');
const MReportService = require('../services/mReportService');


class MReportController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.mReportService = new MReportService(tableName);

    }



}

module.exports = MReportController;