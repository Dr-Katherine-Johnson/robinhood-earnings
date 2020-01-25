const earnings = require('./earnings.js');
const tickers = require('./tickers.js');
const db = require('./index.js');

// needs to create the array of all the tickers, and add the additional price data

const start = () => {
  let date = ['Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019'];
  let tickerList = tickers.createTickers().map(ticker => {
    return {
      ticker: ticker,
      name: earnings.generateName(),
      earnings: earnings.generateEarningsList()
    };
  });
  return tickerList;
}

// able to save data by chunks
// need to handle error
async function seedDatabase() {
  await db.Earnings.deleteMany({}, () => {
    console.log('Remove Earnings')
  })

  let total = 50000
  let count = 0;
  let chunk = start().length;

  while (count < total) {
    count += chunk;
    await db.Earnings.insertMany(start());
    console.log(count);
  }

  if (count >= total) {
    console.log('Earnings seeded to database!')
  }
}

seedDatabase();

// module.exports.seedDatabase();
