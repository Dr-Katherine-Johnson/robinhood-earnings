const pgp = require('pg-promise')({
  capSQL: true // capitalize all generated SQL
});

const db = pgp({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'earnings',
  port: 5432,
})

const cs = new pgp.helpers.ColumnSet(['ticker', 'name', 'earnings'], { table: 'tickers' });

module.exports = { db, pgp, cs };
