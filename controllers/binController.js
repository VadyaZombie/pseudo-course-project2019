const BaseController = require('./baseController');
const BinService = require('../services/binService');


class BinController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.binService = new BinService(tableName);

    }



}

module.exports = BinController;