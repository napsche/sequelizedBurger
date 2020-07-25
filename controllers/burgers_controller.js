var express = require("express"); 

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// router.post("/", function(req, res) {
//     burger.create([
//         "burger_name", "devoured"
//     ], [
//         req.body.burger_name, req.body.devoured
//     ], function(result) {
//         res.json({ id: result.insertId });
//     });
// });

router.post("/", function(req, res) {
    console.log(req.body.burger_name);
    if(req.body.burger_name !== "") {
        burger.insertOne(req.body.burger_name.trim(), function() {
            res.redirect("/");
        });
    }
});

router.put("/:id", function(req, res) {
    // var condition = "id = " + req.params.id; 

    // console.log("condition", condition);

    // burger.update({
    //     devoured: req.body.devoured
    // }, condition, function(result) {
    //     if (result.changedRows == 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // });
    console.log(req.params.id);

    burger.updateOne(req.params.id, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id; 

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 