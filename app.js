const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConnect');
const redis = require('./redisConnect');
const routers = require('./routes/routers');

const app = express();

db.getConnectionDb();
redis.getConnectionToRedis();



app.listen(3000, () => console.log('App listen'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use('/', routers.mainRoute);
app.use('/api/department', routers.departmentRoute);
app.use('/api/collectionPoint', routers.collectionPointRoute);
app.use('/api/garbageType', routers.garbageTypeRoute);
app.use('/api/bin', routers.binRoute);
app.use('/api/discharge', routers.dischargeRoute);
app.use('/api/user' , routers.userRoute);
app.use('/api/mReport' , routers.mReportRoute);
app.use('/api/benefitLevel' , routers.benefitLevelRoute);
app.use('/api/benefit' , routers.benefitRoute);
app.use('/api/benefits' , routers.benefitsRoute);


app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message);
});
