let express = require('express');

//to explain let vs var

let app = express();
app.use(express.json()); // its required for reading the request as json

let showEmployeeRoute = require('./routes/showEmployee');
let createEmployeeRoute = require('./routes/createEmployee');


app.use('/employee', showEmployeeRoute); // /employee is a prefix
app.use('/employee',createEmployeeRoute);

//server and port required to serve the request and give response
app.listen(9876, () => {
    console.log('Server is listening on port 9876');
});