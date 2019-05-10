const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConnect');
const routers = require('./routes/routers');

const app = express();

db.getConnectionDb();
app.listen(3000, () => console.log('App listen'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use('/', routers.mainRoute);
app.use('/api/department', routers.departmentRoute);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message);
});
