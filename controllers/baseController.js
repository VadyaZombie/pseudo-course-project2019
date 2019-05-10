
const BaseService = require('../services/baseService');

class BaseController {
    constructor(tableName) {
        this.baseService = new BaseService(tableName);

        this.insertOne = this.insertOne.bind(this);
        this.selectById = this.selectById.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.updateById = this.updateById.bind(this);
        this.deleteById = this.deleteById.bind(this);
    }

    async insertOne(req, res) { 
        try {
            let result = await this.baseService.insertOne(req.body);
            await res.status(201).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }

    async selectById(req, res){
        try {
            let result = await this.baseService.selectById(req.params.id);
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }

    async selectAll(req, res){
        try {
            let result = await this.baseService.selectAll();
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }

    async updateById(req, res){
        try {
            let result = await this.baseService.updateById(req.params.id, req.body);
            console.log(result);
            await res.status(200).json({success: true, data: {id : req.params.id, result : result}});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }
    
    async deleteById(req, res) { 
        try {
            let result = await this.baseService.deleteById(req.params.id);
            console.log(result);
            await res.status(200).json({success: true, data: {affectedRows : result.affectedRows}});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }

}

module.exports = BaseController;