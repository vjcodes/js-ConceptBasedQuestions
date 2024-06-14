const arr = [1, 2, 3, 4, 5];

const filt = (ele) => {
  if (ele > 2) {
    return true;
  }

  return false;
};

Array.prototype.myFilter = function (cb) {
  const tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (filt(this[i])) {
      tempArr.push(this[i]);
    }
  }

  return tempArr;
};

const newArr = arr.myFilter(filt);
console.log(newArr);
