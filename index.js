let express = require('express');

//to explain let vs var

let app = express();
app.use(express.json()); // its required for reading the request as json

let showEmployeeRoute = require('./routes/showEmployee');
let createEmployeeRoute = require('./routes/createEmployee');
let updateEmployee = require('./routes/updateEmployee');
let deleteEmployee = require('./routes/deleteEmployee');


app.use('/employee', showEmployeeRoute); // /employee is a prefix
app.use('/employee', createEmployeeRoute);
app.use('/employee', updateEmployee);
app.use('/employee',deleteEmployee);

//server and port required to serve the request and give response
app.listen(9876, () => {
    console.log('Server is listening on port 9876');
});