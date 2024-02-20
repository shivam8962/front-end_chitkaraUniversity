// setInterval func is used to execute the code repeatedly.

// 1.
// let count = 0;

// const interval = setInterval(function () {
//   count++;
//   console.log(`Count: ${count}`);
// }, 1000);

// 2: Create a interval that execute for 3 times only:

let count = 0;
const interval = setInterval(function () {
  count++;
  console.log(`Count: ${count}`);

  if (count >= 3) {
    clearInterval(interval);
    console.log("Interval stop after executing 3 times");
  }
}, 1000);
