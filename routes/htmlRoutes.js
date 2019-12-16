var db = require("../models");

module.exports = function(app) {
  app.get("/home", function(req, res) {
    res.render("index");
  });

  app.get("/rooms", function(req, res) {
    res.render("rooms");
  });

  app.get("/thankyou", function(req, res) {
    res.render("thankyou");
  });

  app.get("/payment", function(req, res) {
    res.render("payment");
  });

  app.get("/maps", function(req, res) {
    res.render("maps");
  });

  app.get("/thankyou", function(req, res) {
    res.render("thankyou");
  });

  app.get("/client/:id", function(req, res) {
    db.Client.findOne({ where: { id: req.params.id } }).then(function(hoteldb) {
      res.render("client", {
        client: hoteldb
      });
    });
  });

  //catch-all route that leads to home.html
  app.use(function(req, res) {
    res.render("intro");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
