const MReportModel = require('../models/mReportModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class MReportService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.mReportModel = new MReportModel(tableName);
    }


}

module.exports = MReportService;