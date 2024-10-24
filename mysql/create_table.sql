CREATE DATABASE IF NOT EXISTS desafio_docker_db;

USE desafio_docker_db

CREATE TABLE IF NOT EXISTS people (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL
);