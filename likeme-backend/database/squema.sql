CREATE DATABASE likeme;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    img VARCHAR (1000) UNIQUE,
    description VARCHAR(255) NOT NULL,
    likes INT);
    