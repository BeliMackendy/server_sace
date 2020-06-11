var mysql = require("mysql");
const config = require("config");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: config.get("host"),
  user: config.get("user"),
  password: config.get("password"),
  database: config.get("database"),
});

pool.getConnection(function (err, connection) {
  if (err) throw err; // not connected!
  return connection;
});

module.exports = pool;
