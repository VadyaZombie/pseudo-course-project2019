const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class BenefitModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = BenefitModel;