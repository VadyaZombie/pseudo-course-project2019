const BaseController = require('./baseController');
const UserService = require('../services/userService');
const jwt = require('jsonwebtoken');


class UserController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.userService = new UserService(tableName);

        this.registration = this.registration.bind(this)
    }

    async registration(req, res) {
        try {
            let result = await this.userService.registration(req.body);
            //let result = 'OK';
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }

    }

}

module.exports = UserController;