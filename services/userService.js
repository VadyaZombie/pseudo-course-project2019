const UserModel = require('../models/userModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');
const RedisService = require('./redisService');


class UserService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.redisService = new RedisService();
        this.userModel = new UserModel(tableName);
    }

    async getUserByEmail(email){
        return await this.userModel.getUserByEmail(email)
    }

    async canUserAuth(inputUser, userFromDb){
        if(inputUser.email == userFromDb.email && inputUser.password == userFromDb.password){
            return true;
        } else { return false; }
    }

    async registration(content) {
        let idOfAddedUser = await this.insertOne(content);
        let token = await this.baseMethods.createToken(content.email);
        console.log('this is result' , token)
        let temp = await this.redisService.setItem(token, idOfAddedUser);
        console.log(temp);
        let result = await this.selectById(idOfAddedUser);
        result = await this.baseMethods.prepareDataAboutUserBeforeSendRes(result);
        return {token : token, userData : result};
    }

    async initAuth(content){
        let curUser = await this.getUserByEmail(content.email);
        if (this.canUserAuth(content, curUser)) {
            let token = await this.baseMethods.createToken(content.email);
            await this.redisService.setItem(token, curUser['user_id']);
            let result = await this.baseMethods.prepareDataAboutUserBeforeSendRes(curUser);
            return {token : token, data: result}
        } else {
            throw new Error('Wrong email or password');
        }
    }
}

module.exports = UserService;