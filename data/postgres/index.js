const { Client } = require('pg')

const client = new Client({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'earnings',
  port: 5432,
})

// currently creating DB in shell
// need to create earnings DB if it doesn't exist

client.connect()
  .then(() => { console.log('Connected to PS-DB Successfully') })
  .catch(err => console.log(`Error: ${err}`))


client.query(
  'DROP TABLE IF EXISTS earning'
)
  .then(() => {
    client.query(
      `CREATE TABLE IF NOT EXISTS
      earning(
        id SERIAL PRIMARY KEY,
        ticker  VARCHAR(20) NOT NULL,
        name VARCHAR(30) NOT NULL
      )`
    )
  })
  .catch((err) => `Error: ${err}`)



module.exports = client;
