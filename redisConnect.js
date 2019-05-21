const redis = require('redis');

let redisClient = null;

const getConnectionToRedis = async () => {
    try {
        redisClient = await redis.createClient();
        console.log(`Connection to redis`);
    } catch (err) {
        console.log(err.message);
    }
};

const getRedisClient = async () => {
    try {
        if (redisClient) {
            return await redisClient;
        } else { 
            throw new Error('No connection with redis');
        }
    } catch (err) {
        console.log(err.message);
    }
};


module.exports = {
    getConnectionToRedis,
    getRedisClient
};

