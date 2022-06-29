var exclusiveTime = function (n, logs) {
  let res = Array(n).fill(0), //Save each function sum of times
    callStack = []; //Track calls for each function
  let prevTime = -1; //To track previous fn call start time

  //Format log
  const getLogDetails = (log) => {
    const [id, type, time] = log.split(":");
    return {
      id: parseInt(id),
      isStart: type === "start",
      time: parseInt(time),
    };
  };

  for (let log of logs) {
    let { id, isStart, time } = getLogDetails(log);

    if (isStart) {
      if (callStack.length) {
        let prevFnId = callStack[callStack.length - 1];
        res[prevFnId] += time - prevTime;
      }
      callStack.push(id);
      prevTime = time;
    } else {
      //Get last executing function and calc  how much time  it took
      let lastFnId = callStack.pop();
      res[lastFnId] += time - prevTime + 1;

      prevTime = time + 1; // Reset prevTime for next function  to use to calc  it's total time
    }
  }

  return res;
};
