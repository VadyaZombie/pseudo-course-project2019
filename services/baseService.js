const BaseModel = require('../models/baseModel');
const BaseMethods = require('./dataProcessingService');

const {idNames} = require('../config');
 
class BaseService {
    constructor(collectionName) {

        this.baseMethods = new BaseMethods();
        this.baseModel = new BaseModel(collectionName);
    }

    async insertOne(content) {
        content = await this.baseMethods.prepareDataForInsertOne(content);
        return await this.baseModel.insertOne(content);
    }

    async selectById(id) {
        //content = await this.baseMethods.prepareDataForSelectById(content);
        return await this.baseModel.selectById(id);
    }

    async selectAll() {
        return await this.baseModel.selectAll();
    }

    async updateById(id, content) {
        content = await this.baseMethods.prepareDataForUpdateById(content);
        return await this.baseModel.updateById(id, content);
    }

    async deleteById(id) {
        return await this.baseModel.deleteById(id);
    }

    // async updateById() {
    //     return await this.baseModel.selectAll();
    // }



}

module.exports = BaseService;