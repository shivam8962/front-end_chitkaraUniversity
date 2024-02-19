/*
// Making 2 normal function to see function

//1.
function one() {
  console.log("This is a 1st regular function");
}

function two() {
  console.log("This is a 2nd regular function");
}

// calling both function one by one
one();
two();
*/

/*
//2. making connection of func 2 inside func 1: we do that using argument
function one(call_two) {
  console.log("This is a 1st function, please call function 2");
  call_two();
}

function two() {
  console.log("This is a 2nd regular function");
}

// calling both function one by one
one(two);
*/

//write a program for starting a production ones the order is received.

// let order = (call_production) => {
//   console.log("Order placed, call production to start production");
//   call_production();
// };

// let production = () => {
//   console.log("Order Received, starting production");
// };
// order(production);

let stocks = {
  fruits: ["grapes", "bananas", "apple", "strawberry"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);
  }, 2000);
  call_production();
};

let production = () => {
  setTimeout(() => {
    console.log("Production started");
  }, 1000);
};
order(0, production);
