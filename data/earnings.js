var faker = require('faker');
module.exports = {
  generateName() {
    return faker.company.companyName();
  },

  createAnchorRevenue(num) {
    // get starting price
    return Math.random() * num;
  },

  generateEarningsList() {
    const result = [];

    const now = new Date();
    // now = new Date(now.getFullYear(), now.getMonth());

    for (let i = 0; i < 7 * 10; i++) {
      result.push(this.generateDate(this.generateRevenue(result[i - 1]), i, result[i - 1]));
    }
    return result;
  },

  generateRevenue(previousRevenue) {
    // set actual revenue first
    let revenue;
    if (previousRevenue === undefined) {
      revenue = this.lessThanTenPercentDifferent(this.createAnchorRevenue(1000000));
    } else {
      revenue = this.lessThanTenPercentDifferent(previousRevenue.estRevenue);
    }

    // calculate estimated revenue lessThanTenPercentDifferent
    let estRevenue = this.lessThanTenPercentDifferent(revenue)

    return {
      revenue,
      estRevenue
    };
  },

  // returns a new object with the date added to its input argument
  generateDate(priceObject, index, prev) {
    let dateTime;

    // index is 0, start from latest earnings date, and check if earnings are out yet
    if (index === 0) {
      const now = new Date();
      let deltaToQuarter = (now.getMonth() + 1) % 3

      dateTime = new Date()
      dateTime.setMonth(now.getMonth() - deltaToQuarter)
    } else {
      //Decrement by 3 month right away
      dateTime = new Date(prev.dateTime);
      dateTime.setMonth(dateTime.getMonth() - 3);
    }
    return Object.assign({}, priceObject, { dateTime: dateTime.toISOString() });
  },

  // returns a number that is less than 10% different from its argument
  // @param num - INT - input number
  // @param useLessThan - INT - should the function return a number less than or greater than the input argument, 0 for yes, 1 for no, omit for random
  lessThanTenPercentDifferent(num, useLessThan) {
    if (useLessThan === undefined) {
      useLessThan = Math.round(Math.random());
    }

    let result, random;
    random = Math.random() * (0.10 * num);

    if (useLessThan === 0) {
      result = num - random
    } else if (useLessThan === 1) {
      result = num + random
    }
    return result;
  }
}