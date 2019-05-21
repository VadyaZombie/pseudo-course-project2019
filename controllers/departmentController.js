const BaseController = require('./baseController');
const DepartmentService = require('../services/departmentService');
const GeocoderService = require('../services/geocoderService');


class DepartmentController extends BaseController {
    constructor(tableName) {
        super(tableName);
        this.departmentService = new DepartmentService(tableName);
        this.geocoderService = new GeocoderService();

        this.getAllCPByDEpartmentId = this.getAllCPByDEpartmentId.bind(this);
        this.testtest = this.testtest.bind(this);

    }

    async getAllCPByDEpartmentId(req, res){
        try {
            let result = await this.departmentService.getAllCPByDEpartmentId(req.params.id);
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }

    async testtest(req, res){
        try {
            let result = await this.geocoderService.testGeoCode(req.body.address);
            console.log(result);
            await res.status(200).json({success: true, data: result});
        } catch (error) {
            await res.status(400).json({success: false, error: error});
        }
    }


}

module.exports = DepartmentController;