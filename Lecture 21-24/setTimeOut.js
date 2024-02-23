// setimeout func is used to execute a func after a specified delay

const { log } = require("console");

// Basic structure: setTimeout(function,delay)

// 1.

function hello() {
  console.log("This is a setTimeOut inside");
}
// console.log("Hi");

// setTimeout(function () {
//   console.log("There!!");
// }, 2000);

// console.log("SetTimeout function is working");

// 2. clearTimeout: Its a function that cancel the execution of the function specified in setTimeout.

console.log("Hi");

let a = setTimeout(function () {
  console.log("There!!");
}, 2000);
clearTimeout(a);
console.log("SetTimeout function is not working");
