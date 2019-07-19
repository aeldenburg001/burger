// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('connection error ' + err.stack + '\n\n');
    return;
  }
  console.log('connected as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;