const mongoose = require('mongoose');
// const seed = require('./seed.js');

mongoose.connect('mongodb://localhost:27017/earnings', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db connected'));


const earningsSchema = new mongoose.Schema({
  ticker: { type: String, required: true, unique: true },
  name: String,
  earnings: [
    {
      dateTime: Date,
      revenue: Number,
      estRevenue: Number
    }
  ]
});

var Earnings = mongoose.model('Earnings', earningsSchema);

const dropAll = () => {
  return Earnings.deleteMany({});
}

module.exports = { db, Earnings, dropAll }