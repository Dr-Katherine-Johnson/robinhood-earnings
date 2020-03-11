const pgp = require('pg-promise')({
  capSQL: true // capitalize all generated SQL
});

const db = pgp({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: 'earnings',
  port: 5432,
})

const cs = new pgp.helpers.ColumnSet(['ticker', 'name', 'earnings'], { table: 'tickers' });

module.exports = { db, pgp, cs };
