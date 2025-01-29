let express = require('express');

//to explain let vs var

let app = express();
app.use(express.json()); // its required for reading the request as json

//CRUD APIS - create, show, update, delete

//data store as jsonarray[] of jsonobjects{}
let employeeObj = [{
    id: 1,
    name: 'Diksha Borkar',
    location: 'Chandrapur'
},
{
    id: 2,
    name: 'Pravin Chaudhari',
    location: 'Gondia'
}];

app.get('/showEmployee', (req, res) => {
    res.send(employeeObj);
});

app.post('/createEmployee', (req, res) => {
    let empId = req.body.id;
    let empName = req.body.name;
    let empLocation = req.body.location;
    employeeObj.push({
        id: empId,
        name: empName,
        location: empLocation
    });

    res.send(employeeObj);
});

app.put('/updateEmployee', (req, res) => {
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

//server and port required to serve the request and give response
app.listen(9876, () => {
    console.log('Server is listening on port 9876');
});

// app.get('/showEmployee',function(req, res){

// });