const orm = require("../config/orm");

// create the code that will call the ORM functions using burger specific input for the ORM.
const callORM = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },
    insert: function (col, val, cb) {
        orm.insert("burgers", col, val, function (res) {
            cb(res);
        });
    },
    update: function (val, id, cb) {
        orm.update("burgers", id, val, function (res) {
            cb(res);
        })
    }
}

module.exports = callORM;