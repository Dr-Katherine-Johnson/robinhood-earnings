const earnings = require('./earnings.js');
const tickers = require('./tickers.js');
const db = require('./index.js');

// needs to create the array of all the tickers, and add the additional price data
module.exports = {
  start() {
    let date = ['Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019'];
    let tickerList = tickers.createTickers().map(ticker => {
      return {
        ticker: ticker,
        name: earnings.generateName(),
        earnings: earnings.generateEarningsList()
      };
    });
    return tickerList;
  },

  seedDatabase(cb = () => {}) {
    // Creates a document in MongoDB for each ticker
    db.Earnings.create(this.start(), (result) => {
      console.log('Earnings seeded to database!');
      cb();
    });
  }
};

module.exports.seedDatabase();