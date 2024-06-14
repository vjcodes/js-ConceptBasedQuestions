const asyncSeriesExecutor = async (promises) => {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};

const asyncTask = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completing ${delay}`);
    }, delay * 100);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

asyncSeriesExecutor(promises);

/*
The reason both implementations give different results lies in how they handle the asynchronous nature of promises within a loop context.

Let's take a closer look at each implementation:

1. **First implementation using a `for...of` loop:**
   ```javascript
   const asyncSeriesExecutor = async(promises) => {
       for(let promise of promises){
           try{
               const result = await promise;
               console.log(result);
             }catch(e){
               console.log(e);
         }
       }
   };
   ```
   In this implementation, the `await` keyword is used within the `for...of` loop. This effectively pauses the loop iteration until each promise resolves or rejects. As a result, promises are executed sequentially, one after the other.

2. **Second implementation using `forEach` with `async` function:**
   ```javascript
   const asyncSeriesExecutor = async(promises) => {
      promises.forEach(async (promise) => {
        try {
          const res = await promise;
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      });
   };
   ```
   In this implementation, the `forEach` method is used to iterate over the array of promises. However, the `async` function inside `forEach` does not pause the loop. As a result, all promises are initiated concurrently, and the loop does not wait for each promise to resolve before moving on to the next one. This can lead to unexpected behavior, such as logging results out of order or missing error handling for some promises.

To summarize, the first implementation using the `for...of` loop ensures that promises are executed sequentially, whereas the second implementation using `forEach` may lead to concurrent execution of promises and potentially unexpected behavior due to the asynchronous nature of `await` within a loop.

*/
