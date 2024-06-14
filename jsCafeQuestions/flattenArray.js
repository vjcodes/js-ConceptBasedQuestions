let arr = [1, 2, [3, [4, 5]]];
console.log(arr.flat(2))


Array.prototype.myFlat = function () {
  let res = [];

  if (!Array.isArray(this)) {
    throw new Error(`${this}.flat is not a function`);
  }

  this.forEach((el) => {
    if (Array.isArray(el)) {
      res.push(...el.myFlat());
    } else {
      res.push(el);
    }
  });

  return res;
};

console.log(arr.myFlat());

const obj = {
    name: {
        firstName: "Vinayak",
        lastName: "jaiswal"
    }
}