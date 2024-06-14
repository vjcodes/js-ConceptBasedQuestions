const a = { a: 1, b: 2, c: { z: [4] } };
const b = { a: 1, b: 2, c: { z: [4] } };

// console.log(JSON.stringify(a) === JSON.stringify(b));

const isObject = (object) => {
  return object != null && typeof object === "object";
};

function compareObjects(obj1, obj2) {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);

  if (keysArr1.length !== keysArr2.length) return false;

  for (let key of keysArr1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (isObjects && !compareObjects(value1, value2)) {
      return false;
    }

    if (!isObjects && value1 !== value2) {
      return false;
    }
  }

  return true;
}

console.log(compareObjects(a, b));
