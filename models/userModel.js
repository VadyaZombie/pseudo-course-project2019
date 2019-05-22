const db = require('../dbConnect');
const BaseModel = require('./baseModel');
const util = require('util');

class UserModel extends BaseModel{
    constructor(tableName) {
        super(tableName);
    }

    async getUserByEmail(email){
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        console.log(`SELECT * FROM ${this.tableName} WHERE email = '${email}'`);
        let result = await query(`SELECT * FROM ${this.tableName} WHERE email = '${email}'`);
        console.log(result)
        return await result[0];
    }
}

module.exports = UserModel;