const db = require('../data/index.js');

module.exports = {
  getTicker(req, res, next) {
    // // db.Earnings.findOne({ ticker: req.params.ticker }, (err, result) => {
    //   db.Earnings.find({}, (err, result) => {

    //   if (err) {
    //     console.log(err);
    //     res.send(err);
    //    }
    //    console.log(result)
    //    res.send(result);
    // });
    res.send('hi')
  }
}