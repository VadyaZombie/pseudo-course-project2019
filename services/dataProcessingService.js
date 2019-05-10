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


}

module.exports = BaseMethods