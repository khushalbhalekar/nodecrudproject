let express = require('express');
let route = express.Router();
let employeeService = require('../services/employeeService');

route.put('/updateEmployee', async (req, res) => {
    let empId = req.body.empId;
    let empAge = req.body.empAge;
    let empName = req.body.empName;
    let empLocation = req.body.empLocation;
    let empEmail = req.body.empEmail;
    let empPhone = req.body.empPhone;

    // let tempObj = employeeObj.find(employee => employee.id == empId);
    // if (tempObj) {
    //     tempObj.name = empName;
    //     tempObj.location = empLocation;
    //     res.send("Employee updated successfully");

    // } else {
    //     res.send("No employee record found");
    // }

    // emp_id, emp_age, emp_email, emp_location, emp_name, emp_phone
    let result = await employeeService.updateEmployee(empId, empAge, empEmail, empLocation, empName, empPhone);
    let affectedRows = result.affectedRows;
    if (affectedRows > 0) {
        res.send("Employee updated successfully");
    } else {
        res.send("Something went wrong");
    }
});


module.exports = route;