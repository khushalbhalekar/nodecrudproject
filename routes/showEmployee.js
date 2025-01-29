let express = require('express');
let route = express.Router();
let employeeService = require('../services/employeeService');

//{ employeeObj: Promise { <pending> } } when used without async await
//to resolve a promise, always use async await

route.get('/showEmployee', async(req, res) => {//async in function name
    let employeeObj = await employeeService.showEmployee();
    console.log({employeeObj});
    res.send(employeeObj);
});


module.exports = route;