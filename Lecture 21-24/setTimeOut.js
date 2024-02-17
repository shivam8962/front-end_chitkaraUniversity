// setimeout func is used to execute a func after a specified delay

// 1.
// console.log("Hi");

// setTimeout(function(){
//     console.log("There!!");
// },2000);

// console.log("This is a working of SetTimeout function")

// 2.

console.log("Hi");

let a = setTimeout(function(){
    console.log("There!!");
},2000);
clearTimeout(a)
console.log("This is a working of SetTimeout function")

