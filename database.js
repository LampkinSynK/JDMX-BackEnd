// Requiring sql module
const mysql = require('mysql2');

// Creating connection with sql app using host, database, user, and password
const connection = mysql.createConnection({
 host: 'localhost',
 database: 'JDMX',
 user: 'root', 
 password: 'password',
});
// Connecting sql with app
connection.connect(function (err) {
 if (err) throw err;
 console.log('MySQL Database is Connected!!!!');
});
module.exports = connection;
