const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class DischargeModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = DischargeModel;