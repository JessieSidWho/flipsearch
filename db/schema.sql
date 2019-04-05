DROP DATABASE IF EXISTS flipsearch_db;
CREATE DATABASE flipsearch_db;
USE flipsearch_db;

-- CREATE TABLE
CREATE TABLE users (
    id SERIAL NOT NULL,
    username VARCHAR(40) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    password VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);

-- INSERT INTO users (username, firstname, lastname, password)
-- VALUES ("catman", "cat", "man", "test");

-- SELECT * FROM users;