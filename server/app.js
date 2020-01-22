const express = require('express')
const path = require('path');
const app = express()
const port = 3007;
const db = require('../data/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('client/dist'));
app.use(express.static('client/public'));

app.get("/earnings/:ticker", function (req, res) {
  db.Earnings.findOne({ ticker: req.params.ticker }, (err, result) => {

    if (err) {
      console.log(err);
      res.send(err);
    }
    console.log(result)
    res.send(result);
  });
})

// POST
app.post('/earnings', (req, res) => {
  const newEarning = new db.Earnings(req.body)

  newEarning.save()
    .then(() => res.json('Earning Added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

// UPDATE
app.put('/earnings/:ticker', (req, res) => {
  db.Earnings.findOne({ ticker: req.params.ticker })
    .then((earning) => {
      earning.ticker = req.body.ticker;
      earning.name = req.body.name;
      earning.earnings = req.body.earnings;

      earning.save()
        .then(() => res.json('Earning Updated'))
        .catch(err => res.status(404).json(`Error: ${err}`));
    })
    .catch(err => res.status(404).json(`Error: ${err}`));
})

// DELETE
app.delete('/earnings/:ticker', (req, res) => {
  db.Earnings.findOneAndDelete({ ticker: req.params.ticker })
    .then(() => res.json('Earning Deleted'))
    .catch(err => res.status(404).json(`Error: ${err}`));
})

app.listen(port, () => console.log(`Earnings chart listening on port ${port}!`))
