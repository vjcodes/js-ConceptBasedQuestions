// DESCRIPTION________________
// Ques:

// What is Object.seal() ?
// we should be able to modify the existing properties or methods of
// the objects but cannot add a new one. Object.seal() can be used
// to achieve the same but it also marks all existing properties
// as non-configurable like we cannot delete them but just update their value if it is writable.

// const obj = {
//     prop: 42
//   };
//   Object.seal(obj);
//   obj.prop = 33;
//   console.log(obj.prop);
// 33
//   delete obj.prop; // cannot delete when sealed
// console.log(obj.prop);
// 33

// NOTE: But we cannot restrict the modification of nested objects with Object.seal().

// _______________________________________________

// TO SEAL NESTED OBJECTS ALSO CREATE A FUNCTION

const deepSeal = (obj) => {
  let propsNames = Object.getOwnPropertyNames(obj);
  //   console.log(propsNames);

  for (let name of propsNames) {
    let value = obj[name];

    obj[name] = value && typeof value === "object" ? deepSeal(value) : value;
  }

  return Object.seal(obj);
};

const obj = {
  prop: 42,
  nested: {
    a: 1,
    b: 2,
  },
};
//Seal the object
deepSeal(obj);
console.log(Object.isSealed(obj));
obj.nested.a = 2;
delete obj.nested.a;
console.log(obj.nested.a);
