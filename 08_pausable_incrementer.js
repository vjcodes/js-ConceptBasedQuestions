// Create a pausable auto incrementor in JavaScript,
// which takes an initial value and steps as input and increments the
// initial value with given steps every second. The incrementer can be paused and resumed back.

const pausableIncrementor = (init = 0, step = 1) => {
  let intervalId = null;
  let count = init;
  let isPaused = true;

  const increment = () => {
    count += step;
    console.log("Current value:", count);
  };

  const startTimer = () => {
    if (!isPaused) return;
    console.log("started");
    isPaused = false;
    intervalId = setInterval(increment, 1000);
  };

  //   const stopTimer = () => {
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //       intervalId = null;
  //     }
  //   };

  const pauseTimer = () => {
    if (isPaused) {
      return;
    }
    clearInterval(intervalId);
    isPaused = true;
  };

  const resumeTimer = () => {
    if (!isPaused) {
      return;
    }
    startTimer();
  };

  return {
    startTimer,
    pauseTimer,
    resumeTimer,
  };
};

const timerObj = pausableIncrementor(0, 5);

//start
timerObj.startTimer();
//stop
setTimeout(() => {
  timerObj.pauseTimer();
}, 5000);

setTimeout(() => {
  timerObj.resumeTimer(); // Resume after another 5 seconds
}, 10000);

// function createPausableAutoIncrementor(initialValue, step) {
//     let value = initialValue;
//     let intervalId = null;
//     let isPaused = true;

//     function increment() {
//       value += step;
//       console.log("Current value:", value);
//     }

//     function start() {
//       if (!isPaused) return;
//       isPaused = false;
//       intervalId = setInterval(increment, 1000);
//     }

//     function pause() {
//       if (isPaused) return;
//       clearInterval(intervalId);
//       isPaused = true;
//     }

//     function resume() {
//       if (!isPaused) return;
//       start();
//     }

//     return {
//       start,
//       pause,
//       resume
//     };
//   }

//   // Example usage:
//   const incrementor = createPausableAutoIncrementor(0, 5);
//   incrementor.start(); // Start incrementing
//   setTimeout(() => {
//     incrementor.pause(); // Pause after 5 seconds
//   }, 5000);
//   setTimeout(() => {
//     incrementor.resume(); // Resume after another 5 seconds
//   }, 10000);
