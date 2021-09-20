CREATE DATABASE pernstack;

-- \c pernstack to access database as postgres user

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

-- todo_id PRIMARY KEY used as unique identifier for item in table
-- SERIAL used to automatically increment id s to avoid duplication
-- description VARCHAR(255) - max length of description = 255 chars