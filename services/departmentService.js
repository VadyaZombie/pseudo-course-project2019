const DepartmentModel = require('../models/departmentModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');
const CollectionPointService = require('../services/collectionPointService')

class DepartmentService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.departmentModel = new DepartmentModel(tableName);

        this.collectionPointService = new CollectionPointService('collection_point')
    }

    async getAllCPByDEpartmentId(departmentId){
        return await this.collectionPointService.getCPByDepartmentId(departmentId);
    }

}

module.exports = DepartmentService;