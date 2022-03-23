DROP DATABASE IF EXISTS my_hobbies;
CREATE DATABASE my_hobbies;
USE my_hobbies;

DROP USER IF EXISTS 'antas_me'@'localhost';
CREATE USER 'antas_me'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyPassword1!';
GRANT ALL PRIVILEGES ON my_hobbies.* TO 'antas_me'@'localhost';

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

DROP TABLE IF EXISTS cooking;
CREATE TABLE cooking(
    id integer PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    dish VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
-- eventually add an image column to store src in database and render on react app
);

DROP TABLE IF EXISTS painting;
CREATE TABLE paintings(
    id integer PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
-- eventually add an image column to store src in database and render on react app
);

DROP TABLE IF EXISTS animals;
CREATE TABLE animals(
  id integer PRIMARY KEY AUTO_INCREMENT, 
  user_id INTEGER NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  reason VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
  -- eventually add an image column to store src in database and render on react app
);

