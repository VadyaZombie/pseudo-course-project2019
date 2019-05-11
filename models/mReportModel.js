const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class MReportModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = MReportModel;