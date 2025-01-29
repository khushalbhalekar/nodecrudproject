let express = require('express');
let route = express.Router();
let employeeService = require('../services/employeeService');

route.put('/updateEmployee', (req, res) => {
    let empId = req.body.id;
    let empName = req.body.name;
    let empLocation = req.body.location;

    let tempObj = employeeObj.find(employee => employee.id == empId);
    if (tempObj) {
        tempObj.name = empName;
        tempObj.location = empLocation;
        res.send("Employee updated successfully");

    } else {
        res.send("No employee record found");
    }
});


module.exports = route;