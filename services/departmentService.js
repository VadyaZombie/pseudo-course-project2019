const DepartmentModel = require('../models/baseModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class DepartmentService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.departmentModel = new DepartmentModel(tableName);
    }


}

module.exports = DepartmentService;