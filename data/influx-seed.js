const influx = require('./influxdb/index.js');
const earnings = require('./earnings.js');
const tickers = require('./tickers.js');

const start = () => {
  let tickerList = tickers.createTickers().map(ticker => {
    return {
      measurement: ticker,
      tags: {
        name: earnings.generateName(),
      },
      fields: { earnings: JSON.stringify(earnings.generateEarningsList()) },
    };
  });
  return tickerList;
}

async function seedDB() {
  influx.dropMeasurement('earning')

  let total = 1000000
  let count = 0;
  let chunk = start().length;

  while (count < total) {
    count += chunk;
    await influx.writePoints(start(), {
      database: 'earnings',
    })
      .catch(err => {
        console.error(`Error saving data to InfluxDB! ${err}`)
      })
    console.log(count);
  }

  if (count >= total) {
    console.log('Tickers seeded to database!')
  }
}

seedDB();
