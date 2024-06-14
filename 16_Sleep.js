const sleep = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

// using then
sleep(5000).then(() => console.log("heyy, sleep"));

//using async await
const performAction = async () => {
  await sleep(3000);
  console.log("Perform sleep...");
};

performAction();
