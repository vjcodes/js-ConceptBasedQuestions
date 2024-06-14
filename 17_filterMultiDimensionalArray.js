const filterArray = (arr, test) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const output = filterArray(arr[i], test);
      result.push(output);
    } else {
      if (test(arr[i])) {
        result.push(arr[i]);
      }
    }
  }

  return result;
};

const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const farr = filterArray(arr, (e) => typeof e === "string");
console.log(JSON.stringify(farr));
