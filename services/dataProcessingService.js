const {secretKeyForTokens} = require('../config');
const jwt = require('jsonwebtoken');

class BaseMethods {
    async prepareDataForInsertOne(content) {
        let strOfColNames = '';
        let strOfColValues = '';
        let arrOfColName = Object.keys(content);
        let arrOfColValues = Object.values(content);

        for (let i = 0; i < arrOfColValues.length; i++) {
            typeof arrOfColValues[i] === 'string' ? strOfColValues += `'${arrOfColValues[i]}'` : strOfColValues += `${arrOfColValues[i]}`;
            if (i !== arrOfColValues.length - 1) {
                strOfColValues += `, `;
            }
        }
        strOfColNames = arrOfColName.join(', ');
        return await {'columnNames': strOfColNames, 'columnValues' : strOfColValues};
    }

    async prepareDataForUpdateById(content) {
        let result = ''; 
        let arrOfColNames = Object.keys(content);
        let arrOfColValues = Object.values(content);
        
        for (let i = 0; i < arrOfColValues.length; i++) {
            typeof arrOfColValues[i] === 'string' ? 
                result += `${arrOfColNames[i]} = '${arrOfColValues[i]}'` : 
                result += `${arrOfColNames[i]} = ${arrOfColValues[i]}`;

            if (i !== arrOfColValues.length - 1) {
                result += `, `;
            }
        }
        return await {strForUpdate : result};
    }

    async getCurrDateTimeForToken(){
        let result = [];
        let DateTime = new Date()

        result.push(DateTime.getFullYear());
        result.push(DateTime.getMonth());
        result.push(DateTime.getDay());
        result.push(DateTime.getHours());
        result.push(DateTime.getMinutes());
        result.push(DateTime.getSeconds());

        console.log(result.join('-'));
        return result.join('-');
    }

    async createToken(str){
        let currDate = await this.getCurrDateTimeForToken();
        let strForToken = currDate.concat(str);
        let result = await jwt.sign(strForToken, secretKeyForTokens);
        console.log(result);
        return result;

    }


}

module.exports = BaseMethods