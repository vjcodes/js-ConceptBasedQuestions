// DESCRIPTION ________________

// Unlike Object.seal(), Object.freeze() freezes the object completely.
//  It does not even allow changing of object properties.

// const obj = {
//     prop: 42
//   };
//   Object.freeze(obj);
//   obj.prop = 33;
// Throws an error in strict mode
//   console.log(obj.prop);
// 42

// But this also only shallowly freezes the nested object properties.

// const obj = {
//     prop: 42,
//     nested: {
//       a: 1,
//   b: 2 }
//   };
//   Object.freeze(obj);
//   obj.nested.a = 33;
// Updates the value
//   console.log(obj.nested.a);
// 33

// ___________________________________________

// TO FREEZE NESTED OBJECTS ALSO CREATE A FUNCTION

const deepFreeze = (obj) => {
  let propNames = Object.getOwnPropertyNames(obj);

  for (let name of propNames) {
    const value = obj[name];

    obj[name] = value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(obj);
};

const obj = {
  prop: 42,
  nested: {
    a: 1,
    b: 2,
  },
};
deepFreeze(obj);
obj.nested.a = 33;
// Updates the value
console.log(obj.nested.a);
// 1
