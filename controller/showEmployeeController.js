let employeeService = require('../services/employeeService');

let showEmployeeController = async (req, res) => {//async in function name
    let employeeObj = await employeeService.showEmployee();
    console.log({ employeeObj });
    res.send(employeeObj);
};

module.exports = {
    showEmployeeController
}