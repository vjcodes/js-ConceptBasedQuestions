let arr = [1, 2, [3, [4, 5]]];

let newArr = arr.flat(2);
console.log(newArr);

Array.prototype.myFlat = function (depth) {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error(`${this}.flat is not a function`);
  }

  this.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      res.push(...el.myFlat(depth - 1));
    } else {
      res.push(el);
    }
  });

  return res;
};

console.log(arr.myFlat(1));
