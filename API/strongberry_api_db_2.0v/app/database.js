var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "user_insert_strongberry",
    password: "strongberry-password",
    database: "db_strongberry_api_version",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado com sucesso!");
});

module.exports = connection;
