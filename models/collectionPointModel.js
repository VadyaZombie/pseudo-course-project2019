const db = require('../dbConnect');
const BaseModel = require('./baseModel');
const util = require('util');

class CollectionPointModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }

    async getCPByDepartmentId(department_id){
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        console.log(`SELECT * FROM ${this.tableName} WHERE department_id = '${department_id}'`);
        let result = await query(`SELECT * FROM ${this.tableName} WHERE department_id = '${department_id}'`);
        return await result;
    }
}

module.exports = CollectionPointModel;