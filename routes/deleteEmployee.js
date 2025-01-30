let express = require('express');
let route = express.Router();
let employeeService = require('../services/employeeService');

route.delete('/deleteEmployee', async (req, res) => {
    let empId = req.body.empId;

    // let employeeIndex = employeeObj.findIndex(employee => employee.id == empId);
    // console.log({ employeeIndex });
    // if (employeeIndex >= 0) {
    //     employeeObj.splice(employeeIndex, 1);
    //     res.send("Employee deleted successfully");
    // } else {
    //     res.send("No employee record found");
    // }

    let result = await employeeService.deleteEmployee(empId);
    let affectedRows = result.affectedRows;
    if (affectedRows > 0) {
        res.send("Employee deleted successfully");
    } else {
        res.send("Something went wrong");
    }
});

module.exports = route;