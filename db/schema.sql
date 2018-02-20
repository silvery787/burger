CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger(
	id INT AUTO_INCREMENT NOT NULL Primary Key,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false
);
