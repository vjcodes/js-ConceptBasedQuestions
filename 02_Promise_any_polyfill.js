const promise_any = (taskList) => {
  const totalTasks = taskList.length;
  const arr = [];
  let errCount = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise) => {
      promise
        .then((data) => resolve(data))
        .catch((error) => {
          arr.push(error);
          errCount++;
          if (errCount === totalTasks) {
            reject(arr);
          }
        });
    });
  });
};

// const test1 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 500, "one");
// });
// const test2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 600, "two");
// });
// const test3 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 200, "three");
// });

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

promise_any([test1, test2, test3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
