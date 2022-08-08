const employee      = require("../controllers/employee.controller");

module.exports = function(app) {
    //--Fetch all Employees--//
    app.get('/employees' , employee.getEmployees);

    //--Fetch a single Employee--//
    app.get('/employees/:id' , employee.getEmployee);

    //--Create a new record into MySQL DB--//
    app.post('/employees' , employee.createEmployee);

    //--Update record into MySQL DB--//
    app.put('/employees' , employee.updateEmployee);

    //--Delete from MySQL DB--//
    app.del('/employees/:id' , employee.deleteEmployee);
}