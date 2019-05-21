const CollectionPointModel = require('../models/collectionPointModel');
const BaseMethods = require('./dataProcessingService');
const BaseService = require('./baseService');

class CollectionPointService extends BaseService{
    constructor(tableName) {
        super(tableName);
        this.baseMethods = new BaseMethods();
        this.collectionPointModel = new CollectionPointModel(tableName);
    }

    async getCPByDepartmentId(department_id){
        return await this.collectionPointModel.getCPByDepartmentId(department_id);
    }

}

module.exports = CollectionPointService;