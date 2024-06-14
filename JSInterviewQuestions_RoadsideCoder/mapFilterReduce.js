const nums = [1, 2, 3, 4];
// const multiplyByThree = nums.map((num, index, arr) => {
//   console.log(arr);
//   return num * 3;
// });

// console.log(multiplyByThree);

// const moreThanTwo = nums.filter((num, index, arr) => {
//   console.log(arr);
//   return num > 2;
// });

// console.log(moreThanTwo);

const sum = nums.reduce((acc, curr, i, arr) => {
  console.log(acc, curr, arr);
  return acc + curr;
}, 0);

console.log(sum);

// 0 1 [ 1, 2, 3, 4 ]
// 1 2 [ 1, 2, 3, 4 ]
// 3 3 [ 1, 2, 3, 4 ]
// 6 4 [ 1, 2, 3, 4 ]
// 10

let students = [
  {
    name: "Vinayak",
    age: 26,
    marks: 50,
  },
  {
    name: "Rahul",
    age: 26,
    marks: 80,
  },
  {
    name: "Mohit",
    age: 26,
    marks: 70,
  },
  {
    name: "Rohit",
    age: 26,
    marks: 90,
  },
];

// I want array with only names of each student in uppercase

const names = students.map((student) => student.name.toUpperCase());
console.log(names);

// I want sum of marks of all students

const sumMarks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

console.log(sumMarks);

//return names of students marks more than 70

const namesMoreThan70 = students
  .filter((stu) => stu.marks > 70)
  .map((stu) => stu.name);

console.log(namesMoreThan70);

// return total marks of students with marks > 70  after 10 marks have been added to 
// those who scored less than 70

const result = students
  .map((stu) => {
    if (stu.marks < 70) {
      stu.marks += 10;
    }

    return stu;
  })
  .filter((stu) => stu.marks > 70)
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(result);

var isIsomorphic = function (sString, tString) {
    let s = [...sString];
    let t = [...tString]
    if (s.length !== t.length) {
        return false;
    }



    // let arrS = [...s]

    let mapS = new Map()
    let mapT = new Map()

    for (let i = 0; i < s.length; i++) {
        if (!mapS.has(s[i])) {
            mapS.set(s[i], 1);
        } else {
            let temp= mapS.get(s[i]) +1;
            mapS.set(s[i], temp);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!mapT.has(t[i])) {
            mapT.set(t[i], 1);
        } else {
            let temp= mapT.get(t[i]) +1;
            mapT.set(t[i], temp);
        }
    }

    console.log(mapS.size, mapT.size)

    if (mapS.size !== mapT.size) {
        return false;
    }

    let sSum = 0;
    let tSum = 0;

    console.log(mapS)
    console.log(mapT)

    for (let value of mapS.values()) {
        sSum += value; // Output: 1, 2, 3
    }
    for (let value of mapT.values()) {
        tSum += value;
    }

    console.log(tSum, sSum)

    if (tSum !== sSum) {
        return false;
    }

    return true;
}

isIsomorphic("bbbaaaba","aaabbbba");