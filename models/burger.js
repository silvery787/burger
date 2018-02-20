var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burgerObj, cb) {
    orm.insertOne("burger", burgerObj, function(res) {
      cb(res);
    });
  },
  update: function(burgerObj, condition, cb) {
    orm.updateOne("burger", burgerObj, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
