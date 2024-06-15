const groupBy = (values, keyFinder) => {
  let mp = new Map();
  values.forEach((value) => {
    let v =
      typeof keyFinder === "function" ? keyFinder(value) : value[keyFinder];
    if (mp.has(v)) {
      let a = mp.get(v);
      a.push(value);
      mp.set(v, a);
    } else if (!mp.has(v)) {
      let a = [];
      a.push(value);
      mp.set(v, a);
    }
  });

  let ans = {};

  for (let [key, value] of mp) {
    ans[key] = value;
  }

  return ans;
};

const groupBy2 = (values, keyFinder) => {
  // using reduce to aggregate values
  return values.reduce((a, b) => {
    // depending upon the type of keyFinder
    // if it is function, pass the value to it
    // if it is a property, access the property
    const key = typeof keyFinder === "function" ? keyFinder(b) : b[keyFinder];
    // aggregate values based on the keys
    if (!a[key]) {
      a[key] = [b];
    } else {
      a[key] = [...a[key], b];
    }
    return a;
  }, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));
console.log(groupBy2([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy2(["one", "two", "three"], "length"));

console.log([1, 2, 3]["length"]);
