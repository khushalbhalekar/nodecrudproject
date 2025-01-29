let express = require('express');
let route = express.Router();
let employeeService = require('../services/employeeService');

route.post('/createEmployee', (req, res) => {
    let empId = req.body.id;
    let empName = req.body.name;
    let empLocation = req.body.location;
    employeeObj.push({
        id: empId,
        name: empName,
        location: empLocation
    });

    res.send(employeeObj);
});

module.exports = route;