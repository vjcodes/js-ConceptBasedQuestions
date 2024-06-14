class Store {
  constructor() {
    this.list = {};
  }

  set(key, value) {
    this.list[key] = value;
  }

  get(key) {
    return this.list[key];
  }

  has(key) {
    if (this.list[key]) {
      return true;
    } else {
      return false;
    }
  }
}

const store = new Store();
store.set("a", 10);
store.set("b", 20);
store.set("c", 30);
console.log(store.get("b")); // 20
console.log(store.has("c")); // true
console.log(store.has("d")); // false
