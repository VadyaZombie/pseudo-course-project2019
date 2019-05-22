const BaseController = require('./baseController');
const UserService = require('../services/userService');
const jwt = require('jsonwebtoken');


class UserController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.userService = new UserService(tableName);

        this.registration = this.registration.bind(this)
        this.auth = this.auth.bind(this);
        this.isThisEmailBusy = this.isThisEmailBusy.bind(this);
        this.getUserByToken = this.getUserByToken.bind(this);
        this.updatePersonalProfile = this.updatePersonalProfile.bind(this);
    }

    async registration(req, res) {
        try {
            let result = await this.userService.registration(req.body);
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }

    async auth(req, res) {
        try {
            let result = await this.userService.initAuth(req.body);
            console.log(result);
            if(!result.err){
                await res.status(200).json({success: true, data: result});
            } else {
                await res.status(401).json({success: false, data: result.err});
            }

        } catch (error) {
            console.log(error)
            await res.status(400).json({success: false, error: error});
        }
    }

    async isThisEmailBusy(req, res){
        try {
            let result = await this.userService.isThisEmailBusy(req.params.email);
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(401).json({success: false, data: error});
        }
    }
    
    async getUserByToken(req, res){
        try {
            let result = await this.userService.getUserByToken(req.params.token);
            console.log(result);
            if(!result.err){
                await res.status(200).json({success: true, data: result});
            } else {
                await res.status(401).json({success: false, data: result.err});
            }
        } catch (error) {
            await res.status(401).json({success: false, data: error});
        }
    }

    async updatePersonalProfile(req, res){
        try {
            let result = await this.userService.updatePersonalProfile(req.params.token, req.body);
            console.log(result);
            if(!result.err){
                await res.status(200).json({success: true, data: result});
            } else {
                await res.status(401).json({success: false, data: result.err});
            }
        } catch (error) {
            await res.status(401).json({success: false, data: error});
        }
    }


}

module.exports = UserController;