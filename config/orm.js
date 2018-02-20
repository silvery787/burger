var connection = require("../config/connection.js");

var orm = {
  selectAll: function(table, cb){
    let qStr = "SELECT * FROM ??;";
    connection.query(qStr, [table], function(err, result){
      if(err) throw err;
      cb(result);
    }); 
  },
  insertOne: function(table, row, cb){
    let qStr = "INSERT INTO ?? SET ?;";
    connection.query(qStr, [table, row], function(err, result){
      if(err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, row, condition, cb){
    let qStr = "UPDATE ?? SET ? WHERE "+condition+";";
    // console.log(qStr);
    connection.query(qStr, [table, row], function(err, result){
      if(err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;