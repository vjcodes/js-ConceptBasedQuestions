const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

// question: what will be console.log(a[b])  ?

// explanation
console.log(a); // { '[object Object]': 456 }
console.log(b.toString()); // [object Object]
console.log(c.toString()); // [object Object]
console.log(a["[object Object]"]); // 456
// therefore console.log(a[b]) // 456
console.log(a[b]); // 456

console.log("_________________");

// const user = {
//   name: "Piyush",
//   age: 24,
// };

// const strObj = JSON.stringify(user);

// console.log(typeof JSON.stringify(user));

// console.log(JSON.parse(strObj));
// console.log(typeof JSON.parse(strObj));

console.log("_____________________");

console.log([..."Vinayak"]);
// [
//     'V', 'i', 'n',
//     'a', 'y', 'a',
//     'k'
// ]

console.log("_____________________");

const settings = {
  username: "Vinayak",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

console.log("_____________________");

const shape = {
  radius: 10,
  diameter() {
    console.log(this);
    return this.radius * 2;
  },
  perimeter: () => {
    console.log(this);
    2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // undefined

console.log("_____________________");

let user = {
  name: "Piyush",
  age: 24,
  fullName: {
    firstName: "Vinayak",
    lastName: "Jaiswal",
  },
};

const {
  fullName: { firstName },
} = user;

console.log(firstName);

console.log("_____________________");

function getItems(fruitList, favFruit, ...args) {
  return [...fruitList, ...args, favFruit];
}

console.log(getItems(["banana", "apple"], "pear", "mango", "guava"));

console.log("_____________________");

let d = { greeting: "Hey!" };
let e;

e = d;

d.greeting = "Hello!";
console.log(e.greeting);

console.log("_____________________");

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });
console.log(JSON.stringify({ a: 1 }) === JSON.stringify({ a: 1 }));

let person = {
  name: "Rahul",
};

const members = [person];

person.name = null;

console.log(members);

console.log("_____________________");

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

console.log("_____________________");

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }

console.log("_____________________");

// DEEP COPY OBJECT WAYS

let userObj = {
  name: "Roadside Coder",
  age: 24,
};

// const objClone = Object.assign({}, userObj);
// const objClone = JSON.parse(JSON.stringify(userObj))
const objClone = { ...userObj };

userObj.age = 30;

console.log(userObj, objClone);
