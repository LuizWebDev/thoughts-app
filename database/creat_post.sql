DROP TABLE IF EXISTS post;

CREATE TABLE post (
    id serial PRIMARY KEY,
    pseudonym VARCHAR(15),
    title VARCHAR (50),
    thought VARCHAR (255)
);