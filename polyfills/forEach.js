Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

function printEle(ele) {
  console.log(ele);
}

[1, 2, 3, 4, 5].myForEach(printEle);
