const db = require('../dbConnect');
const {idNames} = require('../config');
const util = require('util');

class BaseModel {
    constructor(tableName) {
        this.tableName = tableName;
    }
    
    async insertOne(content) {
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        console.log(`INSERT INTO ${this.tableName} (${content.columnNames}) VALUES (${content.columnValues})`);
        let result = await query(`INSERT INTO ${this.tableName} (${content.columnNames}) VALUES (${content.columnValues})`);
        return await result.insertId;
    }

    async selectById(id) {
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        console.log(`SELECT * FROM ${this.tableName} WHERE ${idNames[this.tableName]} = ${id}`);
        let result = await query(`SELECT * FROM ${this.tableName} WHERE ${idNames[this.tableName]} = ${id}`);
        return await result[0];
    }

    async selectAll() {
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        let result = await query(`SELECT * FROM ${this.tableName}`);
        return result;
    }

    async updateById(id, content) {
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        console.log(`UPDATE ${this.tableName} SET ${content.strForUpdate} WHERE ${idNames[this.tableName]} = ${id}`);
        let result = await query(`UPDATE ${this.tableName} SET ${content.strForUpdate} WHERE ${idNames[this.tableName]} = ${id}`);
        return result;
    }

    async deleteById(id) {
        let connection = await db.getDb();
        let query = await util.promisify(connection.query).bind(connection);
        console.log(`DELETE FROM ${this.tableName} WHERE ${idNames[this.tableName]} = ${id}`);
        let result = await query(`DELETE FROM ${this.tableName} WHERE ${idNames[this.tableName]} = ${id}`);
        return result;
    }

}

module.exports = BaseModel;