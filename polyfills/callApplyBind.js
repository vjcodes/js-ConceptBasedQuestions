// call

let person1 = {
  name: "Vinayak Jaiswal",
};

let person2 = {
  name: "Rahul",
};

function printAge(age) {
  console.log(`${this.name} is ${age} years old`);
}

printAge.call(person1, 25);

Function.prototype.myCall = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }

  console.log(this);
  console.log(obj);
  console.log(args);

  obj.fn = this;
  console.log(obj);
  obj.fn(...args);
};

printAge.myCall(person2, 30);

// apply

printAge.apply(person2, [26]);

Function.prototype.myApply = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }

  if (!Array.isArray(...args)) {
    throw new Error("TypeError: CreateListFromArrayLike called on non-object");
  }

  console.log(this);
  console.log(obj);
  console.log(args);

  obj.fn = this;
  console.log(obj);
  obj.fn(...args);
};

printAge.myApply(person1, [27]);

// bind

// let newFunc = printAge.bind(person2);
// newFunc(25);

Function.prototype.myBind = function (obj = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }

  // if (!Array.isArray(...args)) {
  //   throw new Error("TypeError: CreateListFromArrayLike called on non-object");
  // }

  console.log(this);
  console.log(obj);
  console.log(args1);

  obj.fn = this;

  return function (...args2) {
    obj.fn(...args1, ...args2);
  };
};

let newFunc = printAge.myBind(person2);
newFunc(25);
