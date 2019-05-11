const db = require('../dbConnect');
const BaseModel = require('./baseModel');

class UserModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = UserModel;