const calculator = {
  total: 0,

  add: function (val) {
    this.total = this.total + val;
    return this;
  },

  subtract: function (val) {
    this.total = this.total - val;
    return this;
  },

  multiply: function (val) {
    this.total = this.total * val;
    return this;
  },

  divide: function (val) {
    this.total = this.total / val;
    return this;
  },
};

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);

// with functions

const CALC = function() {
  this.total = 0;

  this.add = (val) => {
    this.total = this.total + val;
    return this;
  };

  this.subtract = (val) => {
    this.total -= val;
    return this;
  };

  this.multiply = (val) => {
    this.total *= val;
    return this;
  };

  this.divide = (val) => {
    this.total /= val;
    return this;
  };

  this.value = () => this.total;
};

const calculator2 = new CALC();
calculator2.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator2.total);
