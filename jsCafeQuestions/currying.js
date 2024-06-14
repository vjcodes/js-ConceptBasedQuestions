const ARGS_LEN = 5;

const sum = (...args) => {
  if (args.length === ARGS_LEN) {
    return args.reduce(
      (initialValue, currentValue) => initialValue + currentValue,
      0
    );
  } else {
    const recursiveFunction = (...args2) => {
      args = args.concat(args2);
      if (args.length === ARGS_LEN) {
        return args.reduce(
          (initialValue, currentValue) => initialValue + currentValue,
          0
        );
      } else {
        return recursiveFunction;
      }
    };

    return recursiveFunction;
  }
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1)(2)(3)(4)(5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1)(2, 3, 4, 5));
