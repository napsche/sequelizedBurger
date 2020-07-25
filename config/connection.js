// var express = require("express");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
// var db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// // Routes
// // =============================================================
// require("./routes/api-routes.js")(app);

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
var mysql = require("mysql"); 

var connection; 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connecion = mysql.createConnection({
        port: 8080,
        host: "localhost",
        user: "root",
        password: "NewPassword!23",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return; 
    }
    console.log("Connected as  id " + connection.threadId); 
});

module.exports = connection; 