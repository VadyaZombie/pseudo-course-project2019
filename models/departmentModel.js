const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class DepartmentModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = DepartmentModel;