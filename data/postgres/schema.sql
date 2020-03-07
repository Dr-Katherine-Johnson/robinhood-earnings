DROP DATABASE earnings;
CREATE DATABASE earnings;
\c earnings

DROP TABLE IF EXISTS tickers;

CREATE TABLE tickers (
  id SERIAL PRIMARY KEY,
  ticker  VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  earnings TEXT []
);

CREATE INDEX tickers_id ON tickers(id);
CREATE INDEX tickers_ticker ON tickers(ticker);

/*  Execute this file from the command line by typing:
 *    psql -d postgres -U root < earnings/data/postgres/schema.sql
 *  to create the database and the tables.*/
