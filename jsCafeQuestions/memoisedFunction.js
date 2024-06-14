const addThreeNums = (a, b, c) => {
  return a + b + c;
};

function memoize(cb) {
  const cache = {};
  return (...args) => {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log(`fetching from cache for args ${argsToString}`);
      return cache[argsToString];
    } else {
      console.log(`computing value for args ${argsToString}`);
      cache[argsToString] = cb.apply(this, args);
      return cache[argsToString];
    }
  };
}

const add = memoize(addThreeNums);
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3));

const memoisedFactorial = memoize((n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * memoisedFactorial(n - 1);
  }
});

console.log(memoisedFactorial(5));
console.log(memoisedFactorial(6));
