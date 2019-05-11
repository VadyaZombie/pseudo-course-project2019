const UserModel = require('../models/userModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class UserService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.userModel = new UserModel(tableName);
    }


}

module.exports = UserService;