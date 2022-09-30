CREATE DATABASE IF NOT EXISTS vue_main;
USE vue_main;

CREATE TABLE IF NOT EXISTS main_table (
  id_table INT UNSIGNED AUTO_INCREMENT,
  date DATETIME(6) NOT NULL,
  name varchar(128) NOT NULL,
  amount INT,
  distance INT UNSIGNED,
  PRIMARY KEY (id_table)
);