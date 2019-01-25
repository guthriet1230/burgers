const connection = require("../config/connections");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()

const orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  all: function(input, cb) {
    var queryString = "SELECT * FROM " + input;
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      //   console.log(res);
      cb(res);
    });
  },

  insert: function(table, input, cb) {
    let queryString = `INSERT INTO ${table} (burger_name) VALUE ('${input}')`;
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      //   console.log(res);
      cb(res);
    });
  },

  update: function(table, id, val, cb) {
    var queryString = `UPDATE ${table} SET devoured = ${val} WHERE ${id}`
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      //   console.log(res);
      cb(res);
    });
  }
};

module.exports = orm;
