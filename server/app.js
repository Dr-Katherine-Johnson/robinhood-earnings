const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const db = require('../data/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('client/dist'));
app.use(express.static('client/public'));

app.get("/earnings/:ticker", function(req, res) {
  db.Earnings.findOne({ ticker: req.params.ticker }, (err, result) => {

    if (err) {
      console.log(err);
      res.send(err);
    }
    console.log(result)
    res.send(result);
  });
})

app.listen(port, () => console.log(`Earnings chart listening on port ${port}!`))
