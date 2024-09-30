// Higher order array methods .
// map, reduce , filter .
// not changing array creates a new one 


// 1. map 
// creates a new array by performing some operation on each arry elmnt.
// v can print idx and arry too .
// let arr = [10, 20, 30];
// let a = arr.map((val, idx, array)=>{
//     console.log(val, idx)
//     return val + 1;
// });
// console.log(a);

// 2. filter 
//filters an arry with values that passes a test(condition) , creates  a new array

// prints val for which condition is true.

// let arr2 = [22,  23, 45, 21, 0, 3, 5];
// let b = arr2.filter((val)=>{
//     return val>20;
// });
// console.log(b);


// 3. Reduce 
// Reduces an array to single value.

// let array = [1, 2, 3, 4];
// let res = array.reduce((val1, val2)=>{
//     return val1 + val2;
// });
// console.log(res);


///////////////////////////////////////////////
// foreach loop.
// calls a fnc once for each elemnt in array.

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val)=>{
//     console.log(val*val);
// })



// let num = [1, 2, 3, 4, 5];
// for(let i =0; i<num.length; i++){
//     console.log(num[i]);
// };



//////////////////////////////////
// .from (to make an array from string)
// let name = "Sudais Khan";
// let arr = Array.from(name);
// console.log(arr);

// 2. for of (accessing array items)
let num = [1, 2, 3, 4];
// for(let i of num){
//     console.log(i);
// }


// 3. for  in (keys (indexes))
// for (let i in num){
//     console.log(i);
// }


// // Finding greater num in array.
// const nums = [1, 2, 3, 4, 10];
// const max = Math.max(...nums);
// console.log(max);



// function evenodd(num){
//     if(num%2===0){
//         return `${num} is even`;
//     }
//     else {
//         return `${num} is odd`;
//     }
// };
// console.log(evenodd(2));


// function max(num, num2){
//     if(num>num2){
//         return `${num} is greater than ${num2}`
//     }
//     else {
//         return`${num2} is greater than ${num}`;
//     }

// }
// console.log(max(100, 200));


