const client = require('./postgres/index.js');
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
  // if table exists drop

  let total = 2000
  let count = 0;
  let chunk = start().length;

  while (count < total) {
    count += chunk;
    await client.query(`INSERT INTO public.earning(ticker, name) VALUES('ABB', 'APPLE')`)
      .then(() => client.end())
      .catch(err => {
        console.error(`Error saving data to PostgresDB! ${err} `)
      })
    console.log(count);
  }

  if (count >= total) {
    console.log('Tickers seeded to database!')
  }
}

seedDB();
