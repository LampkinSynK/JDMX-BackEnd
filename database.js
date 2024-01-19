// Requiring sql module
const mysql = require('mysql2');

// Creating connection with sql app using host, database, user, and password
const connection = mysql.createConnection({
 host: 'sql5.freesqldatabase.com',
 database: 'sql5678157',
 user: 'sql5678157', 
 password: 'HbtPFK7FFy',
});
// Connecting sql with app
connection.connect(function (err) {
 if (err) throw err;
 console.log('MySQL Database is Connected!!!!');
});
module.exports = connection;
