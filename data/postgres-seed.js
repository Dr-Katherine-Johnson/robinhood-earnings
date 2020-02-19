const { db, pgp, cs } = require('./postgres/index.js');
const earnings = require('./earnings.js');
const tickers = require('./tickers.js');

const start = () => {
  let tickerList = tickers.createTickers().map(ticker => {
    return {
      ticker: ticker,
      name: earnings.generateName(),
      earnings: earnings.generateEarningsList()
    };
  });
  return tickerList;
}

async function seedDB() {
  let total = 1000000
  let count = 0;
  let chunk = start().length;

  while (count < total) {
    count += chunk;
    await db.none(pgp.helpers.insert(start(), cs))
      .then(() => {
        console.log('Success')
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      });
    console.log(count);
  }

  if (count >= total) {
    console.log('Tickers seeded to database!')
  }
}

seedDB();
