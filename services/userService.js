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
        console.log(`mail ${inputUser.email == userFromDb.email}`);
        console.log(`password ${inputUser.password == userFromDb.password}`);
        
        if(inputUser.email == userFromDb.email && inputUser.password == userFromDb.password){
            return true;
        } else { return false; }
    }

    async isThisEmailBusy(email){
        let result = await this.getUserByEmail(email);
        return result ? true : false

    }

    async registration(content) {
        let idOfAddedUser = await this.insertOne(content);
        let token = await this.baseMethods.createToken(content.email);
        console.log('this is result' , token)
        let temp = await this.redisService.setItem(token, idOfAddedUser);
        console.log(temp);
        let result = await this.selectById(idOfAddedUser);
        result = await this.baseMethods.prepareDataAboutUserBeforeSendRes(result);
        return {userData : result};
    }

    async initAuth(content){
        console.log(content);
        
        let curUser = await this.getUserByEmail(content.email);
        //hardcode
        console.log(curUser, curUser == undefined);
        if(curUser){    
            if (await this.canUserAuth(content, curUser)) {
                let token = await this.baseMethods.createToken(content.email);
                await this.redisService.setItem(token, curUser['user_id']);
                let result = await this.baseMethods.prepareDataAboutUserBeforeSendRes(curUser);
                return {token : token, userData: result}
            } else {
                return {err : 'wrong email or password'}
            }
        } else {
            return {err : 'wrong email'}
        }
        //endOfHardCode

    }

    //TO DO существует ли user
    async getUserByToken(token){
        let tokenIsExist = await this.redisService.isItemExist(token);
        if(tokenIsExist){
            let userId = await this.redisService.getItem(token);
            console.log(userId)
            let userData = await this.selectById(userId);
            console.log(userData)
            userData = await this.baseMethods.prepareDataAboutUserBeforeSendRes(userData);
            console.log(userData);
            return {userData : userData};
        } else {
            return { err : "token is dead" }
        }
    }

    async updatePersonalProfile(token, content){
        let tokenIsExist = await this.redisService.isItemExist(token);
        if(tokenIsExist){
            let userId = await this.redisService.getItem(token);
            console.log(userId)
            let userData = await this.updateById(userId, content);
            console.log(userData)
            return {userData : userData};
        } else {
            return { err : "token is dead" }
        }
    }
}

module.exports = UserService;