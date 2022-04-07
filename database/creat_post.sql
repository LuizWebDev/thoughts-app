DROP TABLE IF EXISTS post;

CREATE TABLE post (
    id serial PRIMARY KEY,
    title VARCHAR (50),
    pseudonym VARCHAR(15),
    thought VARCHAR (255)
);
