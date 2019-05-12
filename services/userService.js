const UserModel = require('../models/userModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');


class UserService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.userModel = new UserModel(tableName);
    }


    async registration(content) {
        let token = await this.baseMethods.createToken(content.email);
        console.log('this is result' , token)
        return token;
    }
}

module.exports = UserService;