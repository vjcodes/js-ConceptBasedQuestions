let obj = {
  a: "12",
  b: 23,
  c: {
    p: 23,
    o: {
      l: 56,
    },
    q: [1, 2],
  },
};

// DESIRED OUTPUT:
// {
//     a:12,
//     b:23,
//     c.p:23,
//     c.o.l:56,
//     c.q.0: 1,
//     c.q.1: 2
// }

function flattenObject(obj, parent) {
  const finalObj = {};

  const generateFlatObjects = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        generateFlatObjects(value, newParent + ".");
      } else {
        finalObj[newParent] = value;
      }
    }
  };

  generateFlatObjects(obj, parent);

  return finalObj;
}

console.log(flattenObject(obj, ""));

//_______________________________________

// BELOW APPROACH IS NOT WORKING/Partially working AS value.myFlat as assigning myFlat as a key to object value

// Object.prototype.myFlat = function (parent, res) {
//   for (let key in this) {
//     const newParent = parent + key;
//     const value = this[key];
//     if (typeof value === "object") {
//       value.myFlat(newParent + ".", res);
//     } else {
//       res[newParent] = value;
//     }
//   }

//   return res;
// };
