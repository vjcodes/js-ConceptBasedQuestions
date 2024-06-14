const schedules = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: ["d"] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["f"] },
  { id: "f", dependencies: [] },
];

const sheduler = (sch) => {
  const tasks = sch;
  const totalTasks = tasks.length;
  let completedTasks = 0;
  let currentTask = 0;
  let res = [];

  const removeTaskFromDeps = (dep) => {
    tasks.forEach((task) => {
      task.dependencies = task.dependencies.filter((item) => item !== dep);
    });
  };

  while (completedTasks < totalTasks) {
    const task = tasks[currentTask];
    if (!task.dependencies.length && !task.executed) {
      res.push(task.id);
      task.executed = true;
      completedTasks += 1;
      const dep = task.id;
      removeTaskFromDeps(dep);
    } else if (!task.visited) {
      task.visited = 1;
    } else if (task.visited > totalTasks) {
      console.log("Cycle formed");
      break;
    } else {
      task.visited += 1;
    }

    if (currentTask === totalTasks - 1) {
      currentTask = 0;
    } else {
      currentTask += 1;
    }
  }

  return res;
};

console.log(sheduler(schedules));
