BEGIN;

  DROP TABLE IF EXISTS users
  CASCADE;
  DROP TABLE IF EXISTS posts
  CASCADE;

  CREATE TABLE users
  (
    id SERIAL PRIMARY KEY,
    username VARCHAR(16) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(25) NOT NULL
  );

  INSERT INTO users
    (username, email, password)
  VALUES
    ('adalovelace', 'ada@lovelace.com', 'il0v3c0d1ng'),
    ('mhamilton', 'margaret@hamilton.com', 's0ftw4r3engin33r'),
    ('maryjackson', 'mary@jackson.com', 'L4ngl3yNASA');

  CREATE TABLE posts
  (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    text_content VARCHAR(255),
    date_posted TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO posts
    (user_id, text_content)
  VALUES
    ('1', 'how to build a mechanical computer'),
    ('2', 'that software development is a form of engineering'),
    ('3', 'how to be a NASA engineer');

COMMIT;