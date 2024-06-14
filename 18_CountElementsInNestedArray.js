Array.prototype.multiCount = function (test) {
  let arr = this;
  let count = 0;

  const countElements = (arr) => {
    arr.forEach((a) => {
      if (Array.isArray(a)) {
        countElements(a);
      } else {
        if (test(a)) {
          count++;
        }
      }
    });
  };

  countElements(arr);

  return count;
};

const arr = [[1, [2, [3, 4, "foo", { a: 1, b: 2 }]], "bar"]];
const count = arr.multiCount((e) => typeof e === "number");
console.log(count);
