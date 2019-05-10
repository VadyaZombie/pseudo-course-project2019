const BaseController = require('./baseController');
const DepartmentService = require('../services/departmentService');


class DepartmentController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.departmentService = new DepartmentService(tableName);

    }



}

module.exports = DepartmentController;