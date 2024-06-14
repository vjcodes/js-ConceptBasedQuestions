const Store = function () {
  this.obj = {};

  this.set = function (key, value) {
    this.obj[key] = value;
  };

  this.get = function (key) {
    return this.obj[key];
  };

  this.has = function (key) {
    if (this.obj[key]) {
      return true;
    } else {
      return false;
    }
  };
};

const store = new Store();
store.set('a', 10);
store.set('b', 20);
store.set('c', 30);
console.log(store.get('b')); // 20
console.log(store.has('c')); // true
