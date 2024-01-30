// 1. simple object literals:
// const  user = {
//     name: "shivam",
//     age: 18,
//     location: "Chandigarh",
//     email: "shivam@gmail.com"
// }

// //Excess objects:
// console.log(user.email);
// console.log(user["email"]);
// console.log(user);

// 2.object literals with symbol:

 const mysym = Symbol("Key1")
const  user = {
    name: "shivam",
    age: 18,
    [mysym] : "key1",
    location: "Chandigarh",
    email: "shivam@gmail.com"
}

//Excess objects:
console.log(user.email);
console.log(user["email"]);
console.log(user);


