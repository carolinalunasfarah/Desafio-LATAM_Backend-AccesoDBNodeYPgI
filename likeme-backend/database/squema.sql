CREATE DATABASE likeme;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    imgsrc VARCHAR(1000),
    description VARCHAR(255) NOT NULL,
    likes INT);

-- ONE LINE CODE FOR TABLE CREATION
-- CREATE TABLE posts (id SERIAL PRIMARY KEY, title VARCHAR(25) NOT NULL, imgSrc VARCHAR(1000), description VARCHAR(255) NOT NULL, likes INT);