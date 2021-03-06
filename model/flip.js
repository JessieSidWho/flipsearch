// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var flipModel = {
  all: function(cb) {
    orm.all("fliptable", function(res) {
      cb(res);
    });
  },
  one: function(condition, cb) {
    orm.one("fliptable", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("fliptable", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("fliptable", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("fliptable", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = flipModel;