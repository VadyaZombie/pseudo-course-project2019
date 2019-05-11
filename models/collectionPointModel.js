const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class CollectionPointModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = CollectionPointModel;