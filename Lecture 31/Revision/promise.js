// Promises hai kya yeah ek value hai jo hme abhi ni pta per future mai pta hogi.
// To promises represent krti hai future values ko
// Baki promises return krti hai hai hme empty object with some data value in it jo ki uss object k ander hota hai. Promises k 3 state hote hai appending, fullfill or resolve and reject:

//resolve and reject method :

// const order = new Promise((resolve, reject) => {
//   if (
//     item.includes("shirts") &&
//     item.includes("shoes") &&
//     item.includes("rings")
//   ) {
//     resolve("Item ordered");
//   } else {
//     reject("Item not present order cancelled");
//   }
// });

// // consuming promise:
// order.then(
//   //ye tb chalega jb promise resolve hoga
//   (data) => {
//     console.log("order placed successful", data);
//   },
//   //ye tb chalega jb promise reject hoga
//   (error) => {
//     console.log(reject);
//   }
// );

// order
//   .then((data) => {
//     console.log("order placed successful", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log("Our Asynchronous Program started");

const item = ["shoes", "pants", "shirts", "rings"];
const order = new Promise((resolve, reject) => {
  if (
    item.includes("shirts") &&
    item.includes("shoes") &&
    item.includes("rings")
  ) {
    resolve("Item ordered");
  } else {
    reject("Item not present order cancelled");
  }
});
order
  .then((data) => {
    console.log("order placed successful", data);
  })
  .catch((error) => {
    console.log(error);
  });

for (let i = 0; i < 100; i++) {
  console.log("Running", i);
}
console.log("Our Asynchronous Program Ends");

// 2.creating a function which return promise:

function newItem() {
  const item = ["shoes", "pants", "shirts", "rings"];
  return new Promise((resolve, reject) => {
    if (
      item.includes("shirt") &&
      item.includes("shoes") &&
      item.includes("rings")
    ) {
      resolve({ value: "Item present" });
    } else {
      reject("Item not present");
    }
  });
}

newItem()
  .then((data) => {
    console.log("Item added successful", data);
  })
  .catch((error) => {
    console.log(error);
  });

//3.Promise and setTimeout dono ek sath: resolve and reject promise after 2 sec:
function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
myPromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });

// 4.
//promise.resolve: return a value if promise was done .then method always return promise to us.
// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then((value) => {
//   console.log(value);
// });

//5. promise chaining:
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "foo is full";
    return value; // here promise is being returning not the value
  })
  .then((value) => {
    console.log(value);
    value += "foo is full with Shots";
    return value;
  })
  .then((value) => {
    console.log(value);
  });
