const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	database: "POKES",
	user: "root",
	password: "Edgar123!"
});

connection.connect(function (err){
	if (err){
		throw err;
	}
	else
		console.log("Connection successfully");
});

connection.end();
