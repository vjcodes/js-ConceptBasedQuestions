const promiseAllPoly = (taskList) => {
  const totaltasks = taskList.length;
  let completedtasks = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((data) => {
          result[index] = data;
          completedtasks++;
          if (completedtasks === totaltasks) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

const task = (data, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 3000) {
        reject("rejected");
      } else {
        resolve(data);
      }
    }, delay);
  });
};

promiseAllPoly([task(1, 1000), task(2, 2000), task(3, 3000)])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// console.log(result);
