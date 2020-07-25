var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
var methodOverride = require("method-override");
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080; 

var app = express();

app.use(express.static(__dirname + "/public"));
app.use("/", routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
