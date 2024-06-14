const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((ele) => ele * 2);

const mult = (ele) => {
  return ele * 2;
};

Array.prototype.myMap = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(mult(this[i]));
  }
  return tempArr;
};

const newArr = arr.myMap(mult);
console.log(newArr, arr);
