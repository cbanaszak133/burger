
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id int AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(45) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY(id)
);


