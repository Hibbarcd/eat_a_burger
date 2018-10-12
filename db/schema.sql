### Schema
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
