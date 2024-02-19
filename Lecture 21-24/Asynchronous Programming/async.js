// synchronous programming: JS runs in synchronous manner. Top to botton order in serial order.

console.log("I");
console.log("Eat");
console.log("Chocolate");
console.log("with");
console.log("Rich");

// Asynchronous programming: TO see the asynchronous behaviour we were using a setTimeOut function which is inbuild funtion that allow us to run our function after a specific amount of time.

console.log("I");
console.log("Eat");
console.log("Chocolate");
console.log("with");
console.log("Rich");

setTimeout(() => {
  console.log("Chocolate");
});
