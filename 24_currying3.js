const curry = () => {
  let ans = 0;

  return function (num = 0) {
    ans += num;
    return ans;
  };
};

let sum = curry();
console.log(sum(5)); //5
console.log(sum(3)); //8
console.log(sum(4)); //12
console.log(sum(0)); //12
console.log(sum()); //12
