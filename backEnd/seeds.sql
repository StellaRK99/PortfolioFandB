INSERT INTO users(username, password)
VALUES ("user1", "password1");

INSERT INTO cooking(user_id, dish, `description`)
VALUES(1, "Pig Feet Wrapped in Duck Beak", "A gorgeous and seductive dish made with love"),
(1, "Bone Apple Teeth", "The bone and teeth of a juicy apple");

INSERT INTO paintings(user_id, title, `description`)
VALUES(1, "Jean Paul Sarte", "A sketch of the famous philosopher"),
(1, "Simone De Beauvoir", "Jean- Paul Sarte's broad. An existentialist");

INSERT INTO animals(user_id, `type`, reason)
VALUES(1, "Rabbit", "They're extremely cute and soft"), (1, "Slow Loris", "They have ticklish armpits");