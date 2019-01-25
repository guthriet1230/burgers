DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;

