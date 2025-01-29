let dbConnection = require('../database/db');

//to resolve a promise, always use async await
let showEmployee = async() => { // async in the function name
    let query = "SELECT * FROM employee_entity";
    let values = [];
    let result = await dbConnection.query(query, values);   // await in the long running task
    // console.log('showEmployee : '+result);
    // console.log({result});
    console.log('showEmployee : '+JSON.stringify(result[0]));
    return result[0];
}


module.exports = {
    showEmployee
}