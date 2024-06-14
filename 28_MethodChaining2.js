const computeAmount = {
  total: 0,
  lacs: function (val) {
    this.total += val * Math.pow(10, 5);
    return this;
  },
  crore: function (val) {
    this.total += val * Math.pow(10, 7);
    return this;
  },
  thousand: function (val) {
    this.total += val * Math.pow(10, 3);
    return this;
  },
  value: function (val) {
    console.log(this.total);
    return this.total;
  },
};

computeAmount.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

const computeAmount2 = function () {
  this.total = 0;
  this.lacs = function (val) {
    this.total += val * Math.pow(10, 5);
    return this;
  };
  this.crore = (val) => {
    this.total += val * Math.pow(10, 7);
    return this;
  };
  this.thousand = (val) => {
    this.total += val * Math.pow(10, 3);
    return this;
  };
  this.value = () => {
    console.log(this.total);
    return this.total;
  };
};

const cp = new computeAmount2();

cp.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
