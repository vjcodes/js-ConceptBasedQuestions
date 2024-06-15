const filterObject = (arr, prop) => {
  if (typeof prop === "string") {
    for (let obj of arr) {
      if (Object.values(obj).includes(prop)) {
        return obj;
      }
    }
  } else {
    return arr[prop];
  }
};

const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];
console.log("1:", filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log("2:", filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
console.log("3:", filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }
