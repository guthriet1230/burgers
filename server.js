//* Dependencies
//* =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
// const mysql = require("mysql");


//* Sets up the Express App
//* =============================================================
const app = express();
const PORT = process.env.PORT || 8000;


//* Sets up the Express app to handle data parsing
//* =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//* Sets up handlebars
//* =============================================================
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");


//* Defining Routes
//* =============================================================
const routes = require("./controllers//burgers_controller")
app.use(routes);


//* Starts the server to begin listening
//* =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });