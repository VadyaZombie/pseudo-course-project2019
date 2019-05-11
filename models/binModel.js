const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class BinModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = BinModel;