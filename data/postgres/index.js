const { Client } = require('pg')

const client = new Client({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'earnings',
  port: 5432,
})

client.connect()
  .then(() => { console.log('Connected to PS-DB Successfully') })
  .catch(err => console.log(`Error: ${err}`))

client.query(
  `CREATE TABLE IF NOT EXISTS
      earning(
        id INT,
        ticker  VARCHAR(20) NOT NULL,
        name VARCHAR(30) NOT NULL,
        earnings json
      )`
)
  .then(() => client.end())
  .catch(err => console.log(`Error: ${err}`))

module.exports = client;
