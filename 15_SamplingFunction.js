function message() {
  console.log("hello");
}

const sampler = (call, count) => {
  let c = 1;

  return function () {
    if (c === count) {
      message();
      c = 1;
    } else {
      console.log("better luck next");
      c++;
    }
  };
};

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // “hello”  this will be executed
sample();
sample();
sample();
sample(); // “hello”  this will be executed
