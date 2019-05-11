const db = require('../dbConnect');
const BaseModel = require('./baseModel');
const util = require('util');

class BenefitsModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }

    async selectByBenefitLevelId(benefitLevelId){
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        let result = await query(`SELECT * FROM ${this.tableName} WHERE benefit_level_id = ${benefitLevelId}`);
        console.log(`SELECT * FROM ${this.tableName} WHERE benefit_level_id = ${benefitLevelId}`);        
        return result;
    }
}

module.exports = BenefitsModel;