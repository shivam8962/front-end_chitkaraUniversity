// synchronous programming: JS runs in synchronous manner. Top to botton orderin serial order.
console.log("I");
console.log("Eat");
console.log("Chocolate");
console.log("with");
console.log("Rich");

// Asynchronous programming: T0 see the asynchronous behaviour we were using a setTimeOut function which is inbuild funtion that allow us to run our function after a specific amount of time.
console.log("I");
console.log("Eat");
setTimeout(() => {
  console.log("Chocolate");
}, 3000);
//setTimeout is a asynchronous function
console.log("with");
console.log("Rich");
