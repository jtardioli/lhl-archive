DROP TABLE IF EXISTS Languages CASCADE;

CREATE TABLE Languages (
  id SERIAL PRIMARY KEY NOT NULL,
  shortForm VARCHAR,
  longForm VARCHAR
);