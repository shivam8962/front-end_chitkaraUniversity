//slice:
let num1 = [1,2,3,4,5,6]
                            // a,a-1
let slicee = num1.slice(1,4); //(index from where you want to slice, upto which element -1) extract element at index 1,2,3 only
console.log(slicee);

//splice
let num2 = [3,5,6,7,8,9];
                            // a,a
// let splicee = num2.splice(1,3,) // (index,no. of element want to remove,which element you want to put)
// console.log(splicee);

let name = ["Shivam", "Kanav","Lovish","Hridey","Jash","Preet"]
name.splice(1,3,"Singh","Verma")
console.log(name);