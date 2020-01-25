const faker = require('faker');

module.exports = {
  createTickers() {
    let result = [];

    for (let i = 0; i < 1000; i++) {
      const randomNum = faker.random.number({ min: 4, max: 15 });
      let ticker = faker.random.alphaNumeric(randomNum);
      result.push(ticker.toUpperCase());
    }

    return result;
  }
}
