let express = require('express');
let route = express.Router();
let employeeService = require('../services/employeeService');

route.post('/createEmployee', async (req, res) => {
    // emp_age, emp_email, emp_location, emp_name, emp_phone
    let empAge = req.body.empAge;
    let empName = req.body.empName;
    let empLocation = req.body.empLocation;
    let empEmail = req.body.empEmail;
    let empPhone = req.body.empPhone;

    // employeeObj.push({
    //     id: empId,
    //     name: empName,
    //     location: empLocation
    // });

    // res.send(employeeObj);

    let result = await employeeService.createEmployee(empAge, empEmail, empLocation, empName, empPhone);
    console.log({ result });

    // {
    //     result: ResultSetHeader {
    //       fieldCount: 0,
    //       affectedRows: 1,
    //       insertId: 25,
    //       info: '',
    //       serverStatus: 2,
    //       warningStatus: 0,
    //       changedRows: 0
    //     }
    //   }

    let affectedRows = result.affectedRows; // object destructure
    if (affectedRows > 0) {
        res.send("Employee record stored successfully");
    } else {
        res.send("Something went wrong");
    }
});

module.exports = route;