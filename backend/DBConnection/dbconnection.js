const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'affiliatemedb'
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to db:", err);
    return;
  }
  console.log("Connected as id " + db.threadId);
});

module.exports = db;