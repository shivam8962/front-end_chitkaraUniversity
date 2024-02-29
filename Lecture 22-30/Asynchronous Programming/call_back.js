//1.simple function:

// function first() {
//   console.log("This is a first function");
// }

// function second() {
//   console.log("This is a second function");
// }

// //call:
// first();
// second();

//2. callback:
// function first() {
//   console.log("This is a first function");
// }
// function second(call) {
//   console.log("This is a second function");
//   call();
// }
// second(first); // callback: calling 1st inside 2nd function

// 3.callback hell Or Pyramid Of Doom :

//3.1:
// const item = ["shoes", "pants", "kurta"];

// api.createOrder(item, () => {
//   api.proceedToPayment(() => {
//     api.orderSummery(() => {
//       api.wallet();
//     });
//   });
// });

//3.2:
//we are doing nested callback.Which make aur code hard to read and maintain result in callback hell  situation.

// console.log("Maggi lene gaya");
// setTimeout(function () {
//   console.log("Maggi lekar aa gya");
//   console.log("Maggi Banana start");
//   setTimeout(function () {
//     console.log("Maggi Ban gayi");
//     console.log("Maggi khana start");
//     setTimeout(function () {
//       console.log("Maggi khana Samapat");
//     }, 2000);
//   }, 2000);
// }, 2000);

//3.3:More structural way to write asynchronous programming to avoid call back hell situation.

function maggiLaao(cb) {
  console.log("Maggi lene chale gaye");
  setTimeout(function () {
    console.log("Maggi Lekar aa gaye");
    cb(maggiKhaao);
  }, 2000);
}

function maggiBanao(cb) {
  console.log("Maggi Banana start");
  setTimeout(function () {
    console.log("Maggi Bann gai");
    cb();
  }, 2000);
}

function maggiKhaao() {
  console.log("Maggi Khana start");
  setTimeout(function () {
    console.log("Maggi Khana Samapt");
  }, 2000);
}

maggiLaao(maggiBanao);
