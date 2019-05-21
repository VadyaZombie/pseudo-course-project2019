const redis = require('redis');
const {promisify} = require('util');
const {getRedisClient} = require('../redisConnect');


class RedisService {

    async getItem(key){
        let client = await getRedisClient();
        let getAsync = await promisify(client.get).bind(client);
        let result = await getAsync(`token:${key}`);
        console.log(result);
        return result;
    };

    async setItem(token, id){
        let client = await getRedisClient();
        let result = await client.set(`token:${token}` , id, 'EX', 60*60*24*7);
        console.log(result);
        return result;
    };

    async isItemExist(token){
        let client = await getRedisClient();
        let exists = await promisify(client.exists).bind(client);
        let result = await exists(`token:${token}`);
        console.log(result);
        if(result > 0){ return true; } else { return false; }
    };

}

module.exports = RedisService