// const endorsements = [
//   { skill: "css", user: "Bill" },
//   { skill: "javascript", user: "Chad" },
//   { skill: "javascript", user: "Bill" },
//   { skill: "css", user: "Sue" },
//   { skill: "javascript", user: "Sue" },
//   { skill: "html", user: "Sue" },
// ];
// console.log(aggregate(endorsements, "user", "skill"));

// Output: [
//   {
//     user: "Bill",
//     skill: ["css", "javascript"],
//   },
//   {
//     user: "Chad",
//     skill: ["javascript"],
//   },
//   {
//     user: "Sue",
//     skill: ["css", "javascript", "html"],
//   },
// ];


//2 METHODS::::

// 1> USING MAP
const aggregate = (arr, on, who) => {
  let n = arr.length;
  let mp = new Map();

  arr.forEach((element) => {
    if (mp.has(element[on])) {
      let temp = mp.get(element[on]);
      temp.push(element[who]);
      mp.set(element[on], temp);
    } else {
      mp.set(element[on], [element[who]]);
    }
  });

  let ans = [];

  for (let [key, value] of mp) {
    let obj = {};
    obj[on] = key;
    obj[who] = value;
    ans.push(obj);
  }

  return ans;
};

// ______________________

// 2> Using Array.reduce()
const aggregate2 = (arr, on, who) => {
  const res = arr.reduce((acc, element) => {
    const onValue = element[on]; // Bill
    const whoValue = element[who]; // css

    if (acc[onValue]) {
      acc[onValue] = {
        [on]: onValue,
        [who]: [...acc[onValue][who], whoValue],
      };
    } else {
      acc[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    }

    return acc;
  }, {});

  return Object.values(res);
};

//_________________

const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

console.log(aggregate(endorsements, "user", "skill"));
console.log(aggregate2(endorsements, "user", "skill"));
