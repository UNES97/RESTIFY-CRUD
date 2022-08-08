var mysql = require('mysql');
module.exports = {
    db: {
        get : mysql.createConnection({
            connectionLimit: 10,
			host     : 'localhost',
			user     : 'root',
			password : 'root',
			database : 'db_name',
            port     : '3306'
		})
    }
};