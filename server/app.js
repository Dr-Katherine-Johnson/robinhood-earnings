const express = require('express')
const app = express()
const port = 3007;
const { db, cs } = require('../data/postgres/index.js')
const pgp = require('../data/postgres/index.js')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('client/dist'));
app.use(express.static('client/public'));

app.get('/earnings/:ticker', (req, res) => {
  db.one(`SELECT * FROM tickers WHERE ticker = '${req.params.ticker}'`)
    .then((result) => res.status(200).send(result))
    .catch(err => res.status(400).json(`Error: ${err}`));
})


app.post('/earnings', (req, res) => {
  const data = { ticker: req.body.ticker, name: req.body.name, earnings: req.body.earnings }

  db.none(pgp.pgp.helpers.insert(data, cs))
    .then(() => res.status(201).json('Earning Added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
})


app.put('/earnings/:ticker', (req, res) => {
  const data = { ticker: req.body.ticker, name: req.body.name, earnings: req.body.earnings }

  const condition = pgp.pgp.as.format(`WHERE ticker = '${req.params.ticker}'`, data)

  const update = `${pgp.pgp.helpers.update(data, cs)} ${condition}`

  db.none(update)
    .then(() => res.status(200).json('Earning Updated'))
    .catch(err => res.status(404).json(`Error: ${err}`))
})

app.delete('/earnings/:ticker', (req, res) => {
  db.result(`DELETE FROM tickers WHERE ticker = '${req.params.ticker}'`)
    .then(() => res.status(200).json('Earning Deleted'))
    .catch(err => res.status(404).json(`Error: ${err}`));
})

app.listen(port, () => console.log(`Earnings chart listening on port ${port}!`))
