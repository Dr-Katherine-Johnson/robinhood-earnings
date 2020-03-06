const newrelic = require('newrelic');
const express = require('express')
const app = express()
const redis = require('redis');
const snappy = require('snappy');

const port = 3007;

const { db, cs } = require('../data/postgres/index.js')
const pgp = require('../data/postgres/index.js')

const cors = require('cors');
const bodyParser = require('body-parser');

const client = redis.createClient();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('client/dist'));
app.use(express.static('client/public'));


const cache = (req, res, next) => {
  const id = req.params.id;

  client.get(id, (err, data) => {
    if (err) throw err;
    const decode = Buffer.from(data, 'base64')
    snappy.uncompress(decode, { asBuffer: false }, function (err, original) {
      if (data !== null) {
        res.send(original)
      } else {
        next();
      }
    })
  })
}

app.get('/earnings/:id', cache, (req, res) => {
  const id = req.params.id;
  db.one(`SELECT * FROM tickers WHERE id = '${id}'`)
    .then((result) => {
      snappy.compress(JSON.stringify(result), function (err, compressed) {
        err ? console.log(`Error: ${err}`) : console.log('compressed is a Buffer', compressed)

        client.setex(id, 3600, compressed.toString('base64'), (err) => {
          err ? console.log(`Redis Error: ${err}`) : console.log('Zipped value cached!')
        })
      });
      // UNABLE TO FETCH DATA FROM DB WITH NEW ID
      res.status(200).send(result)
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
})

app.post('/earnings', (req, res) => {
  const data = { ticker: req.body.ticker, name: req.body.name, earnings: req.body.earnings }

  db.none(pgp.pgp.helpers.insert(data, cs))
    .then(() => res.status(201).json('Ticker Added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
})


app.put('/earnings/:ticker', (req, res) => {
  const data = { ticker: req.body.ticker, name: req.body.name, earnings: req.body.earnings }

  const condition = pgp.pgp.as.format(`WHERE ticker = '${req.params.ticker}'`, data)

  const update = `${pgp.pgp.helpers.update(data, cs)} ${condition}`

  db.none(update)
    .then(() => res.status(200).json('Ticker Updated'))
    .catch(err => res.status(404).json(`Error: ${err}`))
})

app.delete('/earnings/:ticker', (req, res) => {
  db.result(`DELETE FROM tickers WHERE ticker = '${req.params.ticker}'`)
    .then(() => res.status(200).json('Ticker Deleted'))
    .catch(err => res.status(404).json(`Error: ${err}`));
})

app.listen(port, () => console.log(`Earnings chart listening on port ${port}!`))
