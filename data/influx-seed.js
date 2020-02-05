const influx = require('./influxdb/index.js');
const earnings = require('./earnings.js');
const tickers = require('./tickers.js');

const start = () => {
  let tickerList = tickers.createTickers().map(ticker => {
    return {
      measurement: 'earning',
      tags: {
        ticker: ticker,
        name: earnings.generateName(),
      },
      fields: { earnings: JSON.stringify(earnings.generateEarningsList()) },
    };
  });
  return tickerList;
}

influx.writePoints(start(), {
  database: 'earnings',
})
  .then(() => console.log('Data Seeded!'))
  .catch(err => {
    console.error(`Error saving data to InfluxDB! ${err}`)
  });