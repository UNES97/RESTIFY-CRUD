const dbConfig  = require('../config/db.config')
const mysql     = require('mysql')
var connection  = dbConfig.db.get;

exports.createEmployee = (req, res) => {
    try {
        var employeeData  = req.body;
        connection.query('INSERT INTO employees SET ?', employeeData, function (error, results) {
            if (error) {
                res.json({status : 500 , data : error.sqlMessage});
            } else {
                res.json({status : 200 , message : 'Employee insrted successfully'});
            }
        });
    } catch (error) {
        res.json({status : 500 , data : error.message});
    }
}

exports.getEmployees = (req, res) => {
    try {
        connection.query('SELECT * FROM employees', function (error , results) {
            if (error) {
                res.json({status : 500 , data : error.sqlMessage});
            } else {
                res.json({status : 200 , data : results});
            }
        });
    } catch (error) {
        res.json({status : 500 , data : error.message});
    }
}


exports.getEmployee = (req, res) => {
    try {
        connection.query('SELECT * FROM employees WHERE id = ?', [req.params.id], function (error, results) {
            if (error) {
                res.json({status : 500 , data : error.sqlMessage});
            } else {
                res.json({status : 200 , data : results});
            }
        });
    } catch (error) {
        res.json({status : 500 , data : error.message});
    }
}


exports.updateEmployee = (req, res) => {
    try {
        var employeeData  = req.body;
        connection.query('UPDATE `employees` SET `fullname`=? , `phone`=? , `salary`=? , `age`=? WHERE `id`=?', [employeeData.fullname , employeeData.phone  , employeeData.salary , employeeData.age, employeeData.id], function (error, results) {
            if (error) {
                res.json({status : 500 , data : error.sqlMessage});
            } else {
                res.json({status : 200 , message : 'Employee updated successfully'});
            }
        });
    } catch (error) {
        res.json({status : 500 , data : error.message});
    }
}


exports.deleteEmployee = (req, res) => {
    try {
        connection.query('DELETE FROM `employees` WHERE `id`=?', [req.params.id], function (error, results) {
            if (error) {
                res.json({status : 500 , data : error.sqlMessage});
            } else {
                res.json({status : 200 , message : 'Employee deleted successfully'});
            }
       });
    } catch (error) {
        res.json({status : 500 , data : error.message});
    }
}