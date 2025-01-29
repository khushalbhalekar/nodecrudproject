let express = require('express');
let route = express.Router();
let employeeService = require('../services/employeeService');

app.delete('/deleteEmployee', (req, res) => {
    let empId = req.body.id;

    let employeeIndex = employeeObj.findIndex(employee => employee.id == empId);
    console.log({ employeeIndex });
    if (employeeIndex >= 0) {
        employeeObj.splice(employeeIndex, 1);
        res.send("Employee deleted successfully");
    } else {
        res.send("No employee record found");
    }
});

module.exports = route;