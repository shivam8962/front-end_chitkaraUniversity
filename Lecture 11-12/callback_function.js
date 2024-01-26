const cal = (a,b,operation) => {
    return operation(a,b);
}

 const result = cals(3,4, function(num1,num2){
    return num1 + num2;
});
console.log(result);