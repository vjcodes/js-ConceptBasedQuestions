Promise.myAll = myPromiseAll = (taskList) => {
  let res = [];
  let completedTasks = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((data) => {
          completedTasks++;
          res[index] = data;
          if (completedTasks === taskList.length) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const task = (delay, val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   if (delay < 2) {
    //     reject("error with promise");
    //   } else {
        resolve(val);
    //   }
    }, delay * 1000);
  });
};

Promise.myAll([task(1, 1), task(2, 2), task(3, 3)])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

// Promise.all(taskList);
