var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/index", function(req, res) {
    db.Burger.findAll({})
      .then(function(data) {
        console.log(data);
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("index", function(req, res) {
    db.Burger.create({
      burger_name: req.body.name,
    }).then(function() {
      console.log(dbBurger);
      res.redirect("/index");
      //res.json(dbBurger);
    });
  });

   // PUT route for updating todos. The updated todo will be available in req.body
   app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/index");
    });
  });


  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/index");
    });
  });

};