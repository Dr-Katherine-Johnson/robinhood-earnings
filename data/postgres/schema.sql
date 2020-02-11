DROP DATABASE earnings;
CREATE DATABASE earnings;
\c earnings

DROP TABLE IF EXISTS tickers;

CREATE TABLE tickers (
  id SERIAL PRIMARY KEY,
  ticker  VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(30) NOT NULL,
  earnings json
);


/*  Execute this file from the command line by typing:
 *    psql -d postgres -U root < earnings/data/postgres/schema.sql
 *  to create the database and the tables.*/
