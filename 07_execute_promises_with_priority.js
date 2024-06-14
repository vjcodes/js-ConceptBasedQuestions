// Given a list of promises and their priorities, call them parallelly
// and resolve with the value of the first promise with the most priority.
// If all the promises fail then reject with a custom error.

const executePromisesWithPriority = (promisesWithPriority) => {
  const promises = promisesWithPriority.sort((a, b) => b.priority - a.priority);

  let failedCount = 0;

  return new Promise((resolve, reject) => {
    Promise.all(
      promises.map((promise) =>
        promise.catch(() => {
          failedCount++;

          if (failedCount === promises.length) {
            reject(new Error("All promises failed"));
          }
        })
      )
    ).then((results) => {
      results.forEach((p) => {
        if (p !== undefined) {
          resolve(p);
          return;
        }
      });
    });
  });
};

const promisesWithPriority = [
  {
    promise: new Promise((resolve, reject) =>
      setTimeout(() => resolve("First"), 1000)
    ),
    priority: 3,
  },
  {
    promise: new Promise((resolve, reject) =>
      setTimeout(() => reject("Second"), 500)
    ),
    priority: 1,
  },
  {
    promise: new Promise((resolve, reject) =>
      setTimeout(() => resolve("Third"), 1500)
    ),
    priority: 2,
  },
];

executePromisesWithPriority(promisesWithPriority)
  .then((result) => console.log("Resolved:", result))
  .catch((error) => console.error("Rejected:", error.message));
