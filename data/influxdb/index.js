const Influx = require('influx');

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'earnings',
  schema: [
    {
      measurement: 'earning',
      fields: {
        earnings: Influx.FieldType.STRING,
      },
      tags: ['ticker', 'name']
    }
  ]
});

// influx.dropDatabase('earnings')

influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('earnings')) {
      return influx.createDatabase('earnings');
    }
  })
  .catch(error => console.log({ error }));

module.exports = influx
