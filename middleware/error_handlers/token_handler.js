const err = require('./error_generators');

const checkForActualToken = () => {
    return (req, res, next) => {
        console.log(req.headers['content-type'] == 'application/json');
        if(req.headers['content-type'] == 'application/json'){
            next();
        } else {
            next(err.generateError('Body content not in json format!'), 400);
        }
    };
}


module.exports = {
    bodyIsJSON
}