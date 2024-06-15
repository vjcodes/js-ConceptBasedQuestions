const helper = (arr) => {
  let n = arr.length;
  count = 0;
  function next() {
    if (count > n - 1) {
      return null;
    }
    return arr[count++];
  }

  function done() {
    if (count === n) {
      return true;
    } else {
      return false;
    }
  }

  return { next, done };
};

let iterator = helper([1, 2, "hello"]);
console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null"
