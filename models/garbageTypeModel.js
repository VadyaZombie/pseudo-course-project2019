const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class GarbageTypeModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = GarbageTypeModel;