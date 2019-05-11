const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class BenefitLevelModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = BenefitLevelModel;