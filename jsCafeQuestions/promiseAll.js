const myPromiseAll = (tasks) => {
  const res = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    tasks.forEach((promise, index) => {
      promise
        .then((data) => {
          completed++;
          res[index] = data;
          if (completed === tasks.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
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

myPromiseAll([task(1, 4000), task(2, 5000), task(3, 6000)])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
