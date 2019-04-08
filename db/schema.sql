DROP DATABASE IF EXISTS flipsearch_db;
CREATE DATABASE flipsearch_db;
USE flipsearch_db;

-- CREATE TABLE
CREATE TABLE fliptable (
    id INT NOT NULL AUTO_INCREMENT,
    city VARCHAR(30) NOT NULL,
    state VARCHAR(30) NOT NULL,
    zip INT(5) NOT NULL,
    flip INT(2) NOT NULL,
    PRIMARY KEY (id)
);