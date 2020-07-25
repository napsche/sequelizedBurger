// var connection = require("../config/connection.js");

// //create methods that will execute MySql commands in controllers
// //these are methods you need to retrieve/store data in database
// //selectAll()
// //insertOne()
// //updateOne()
// //export orm object in module.exports

// var orm = {
// 	selectAll: function(tableInput, cb) {
// 		var queryString = "SELECT * from ??";
// 		connection.query(queryString, [tableInput], function(err, res) {
// 			if (err) {
// 				throw err;
// 			}
// 			cb(res);
// 		});
// 	},
// 	insertOne: function(tableInput, columnName, burgerName, cb) {
// 		var queryString = "INSERT INTO ?? (??) VALUES (?)";
// 		connection.query(queryString, [tableInput, columnName, burgerName], function(err, res) {
// 			if (err) {
// 				throw err;
// 			}
// 			cb(res);
// 		});
// 	},
// 	updateOne: function(tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
// 		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
// 		connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, res) {
// 			if (err) {
// 				throw err;
// 			}
// 			cb(res);
// 		});
// 	}
// };

// // Export ORM
// module.exports = orm;