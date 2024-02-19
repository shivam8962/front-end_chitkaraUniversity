/*
// Asynchronous Programming is most important part
 of Js Programming in which we see how our task is
  being performed that we have given. Like getting
   data from a database and requesting api
// In simple term Asynchronous code is something that start now and finish later

//
By default JS is synchronous in nature: means it execute one statement at a time. Which is why 
we called JS is single threaded language.
// 
Synchronous: When we execute our code in synchronous way we wont move to the other execution part of code untill or unless we complete the previous code. Our code basically block the execution of next program to run untill or unless we complete our previous code. To overcome this issue asynchronous came into play.
*/

// 1. synchronous behaviour showing in below example:
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// 2. lets see asynchronous behaviour:

console.log(1);
console.log(2);

setTimeout(() => {
  console.log("call back function is working");
}, 2000); // 2000 mili sec or after 20 sec.
console.log(3);
console.log(4);

// for now we are using setTimeout basically to show the same thing but soon we see its real working in requesting http request.
