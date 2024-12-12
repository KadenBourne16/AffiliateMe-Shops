const mysql = require('mysql2/promise'); // Use the promise version

// Create a connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'affiliatemedb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool
module.exports = db;