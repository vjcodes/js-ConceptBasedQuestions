const str = "I  am Vinayak ";
console.log(str.split(" "));
// console.log(str.split(""))
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

const mySplit = (str, sep) => {
  const res = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sep) {
      res.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }

  res.push(temp);

  return res;
};

const mySplit2 = (string, delimiter) => {
  const res = [];
  if (delimiter === "") return Array.from(string);

  const startSplit = (str, i) => {
    if (i >= string.length) return;

    const index = str.indexOf(delimiter);
    if (index >= 0) {
      res.push(str.substring(0, index));
      startSplit(
        str.substring(index + delimiter.length),
        index + delimiter.length
      );
    } else {
      res.push(str);
    }
  };

  startSplit(string, 0);
  return res;
};

console.log(mySplit("I  am Vinayak ", " "));
console.log(mySplit2("I  am Vinayak ", " "));
