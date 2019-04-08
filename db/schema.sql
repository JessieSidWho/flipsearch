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

CREATE TABLE fliptable (
    id INT NOT NULL AUTO_INCREMENT,
    zip INT(5) NOT NULL,
    city VARCHAR(30) NOT NULL,
    rproperties INT(10) NOT NULL,
    cproperties INT(10) NOT NULL,
    avgyearbuilt INT(4) NOT NULL,
    avgsqft INT(4) NOT NULL,
    sales2019 INT(10) NOT NULL,
    flippercent2019 INT(2) NOT NULL,
    flippedhomes2019 INT(4) NOT NULL,
    sales2018 INT(10) NOT NULL,
    flippercent2018 INT(2) NOT NULL,
    flippedhomes2018 INT(4) NOT NULL,
    PRIMARY KEY (id)
);
