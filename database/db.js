let mysql = require('mysql2');

let config = {
    host:'localhost',
    port:3306,
    database:'empdb',
    user:'root',
    password:'Ptspl@123'
};


let dbConnection = mysql.createConnection(config);


module.exports = dbConnection.promise();