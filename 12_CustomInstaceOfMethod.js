const isInstanceOf = (obj, target) => {
  if (obj === null || typeof obj !== "object") {
    return false;
  }

  while (obj) {
    if (obj.__proto__ === target.prototype) {
      return true;
    }

    obj = obj.__proto__;
  }

  return false;
};

const isInstanceOfRecursive = (obj, target) => {
  if (obj === null || typeof obj !== "object") {
    return false;
  }

  return obj.__proto__ === target.prototype
    ? true
    : isInstanceOfRecursive(obj.__proto__, target);
};

class P {}
class Q extends P {}
const q = new Q();
// console.log(P.prototype)
// console.log(Q)
// console.log(q.__proto__)
// console.log(Q.prototype)
// console.log()

function R() {}
console.log(isInstanceOfRecursive(q, R)) // false
R.prototype = Q.prototype
console.log(isInstanceOfRecursive(q, R)) // true
R.prototype = {}
console.log(isInstanceOfRecursive(q, R)) // false
