let dbConnection = require('../database/db');

//to resolve a promise, always use async await
let showEmployee = async () => { // async in the function name
    let query = "SELECT * FROM employee_entity";
    let values = [];
    let result = await dbConnection.query(query, values);   // await in the long running task
    // console.log('showEmployee : '+result);
    // console.log({result});
    console.log('showEmployee : ' + JSON.stringify(result[0]));
    return result[0];
}

let createEmployee = async (emp_age, emp_email, emp_location, emp_name, emp_phone) => {
    // let query = "INSERT INTO TABLENAME(columns1, columns2) VALUES(?,?)";
    let query = "INSERT INTO employee_entity(emp_age, emp_email, emp_location, emp_name, emp_phone) VALUES(?,?,?,?,?)";
    let values = [emp_age, emp_email, emp_location, emp_name, emp_phone];
    let result = await dbConnection.query(query, values);
    console.log('createEmployee : ' + JSON.stringify(result));
    return result[0];
}

let updateEmployee = async (emp_id, emp_age, emp_email, emp_location, emp_name, emp_phone) => {
    // let query = "UPDATE TABLENAME SET COLUMN1=?,COLUMN2 = ? WHERE CONDITION = ?"
    let query = "UPDATE employee_entity SET emp_age = ?, emp_email = ?, emp_location = ?, emp_name = ?, emp_phone = ? WHERE id = ?";
    let values = [emp_age, emp_email, emp_location, emp_name, emp_phone, emp_id];
    let result = await dbConnection.query(query, values);
    console.log('updateEmployee : ' + JSON.stringify(result));

    return result[0];
}

let deleteEmployee = async (emp_id) => {
    // let query = "DELETE FROM TABLENAME WHERE CONDITION = ?"
    let query = "DELETE FROM employee_entity WHERE id = ?";
    let values = [emp_id];
    let result = await dbConnection.query(query, values);
    console.log('deleteEmployee : ' + JSON.stringify(result));
    return result[0];
}

module.exports = {
    showEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}