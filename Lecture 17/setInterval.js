// setInterval func is used to execute the code repeatedly.

// 1.
let count = 0;

const interval = setInterval(function(){
    count++;
    console.log(`Message: ${count}`);
},1000)

// 2:

// let count = 0;

// const interval = setInterval(function(){
//     count++;
//     console.log(`Message: ${count}`);

// if(count>=3){
//     clearInterval(interval)
//     console.log("Interval stop after executing 3 times")
// }
// },1000)