// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((a, b) => a + b, 0));

Array.prototype.myReduce = function (cb, initial) {
  let notInit = false;
  if (!initial) {
    notInit = true;
  }
  let init = initial || this[0];
  this.forEach((ele, index) => {
    init = cb(init, ele);
  });

  return init;
};

Array.prototype.myReduce2 = function (cb, initial) {
  if (!this) throw new Error("Array is not defined");
  var array = this;
  var index = 0;
  var accumulator;
  var n = array.length;

  if (!n) {
    if (initial) return initial;
    else throw new Error("You need to pass initial value if array is empty");
  }

  if (initial) {
    accumulator = initial;
  } else {
    accumulator = array[index++];
  }

  while (index < n) {
    accumulator = cb(accumulator, array[index], index, array);
    index++;
  }

  return accumulator;
};

console.log([1, 2, 3, 4, 5].myReduce2((a, b) => a + b, 0));
