// Arrays : collection of items
// array is a special obj
// information storing. linear method.(single line) (box)
// property is a value and method is a function which do something
// Arrays are Mutable (changeable)
// Array length = last index + 1.
// let marks = [50,70,80,65, 85];
// marks[0] = 89
// console.log(marks)
//////////////////////////////////////

// looping over array 
// loops .. iterbale ... (iterate) (strings, obj, arrays)
// let arr = ["Sudais", "Thor", "Ironman", "Hulk"];
// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for of.
// for(let element of arr){
//     console.log(element);
// }
/////////////////////////////////////////////

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i of marks){
//     sum+=i;
// }
// let avg = sum/marks.length
// // console.log(avg);
// console.log(`The average marks is = ${avg}`);
//////////////////////////////////////////////////////

// for of method 
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} is = ${val} `);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }



// for method 
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i]-= offer;
// }
// console.log(items);

// METHODS
let arr = [0, 1, 2, 3, 4];
let arr2 = [5,6,7];
// 1. Push (add to end)
// arr.push(5,6,7);
// console.log(arr);
// 2. pop (removes from end)
// arr.pop();
// console.log(arr);
//3. to string(converts array to string);
// console.log(arr.toString());
// 4. concat ( adds multple arrays)
// console.log(arr.concat(arr2));

// 5.unshift (add to start)


// 6. shift (dlt from start)
// let result = arr.shift();
// console.log(arr);

// 7. slice (returns a piece of an array)
// console.log(arr.slice(0,3));
// 8. splice (change original array(add, remove, replace))

// arr[0] = 10;
// arr.splice(2,2,101,102);
// console.log(arr);
// arr.splice(2, 0, 200);
// console.log(arr);
// arr.splice(3, 1);
// console.log(arr);

// splice replace
// arr.splice(3, 1, 200);
// console.log(arr);
////////////////////////////////////////
// let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// // company.shift();
// company.splice(2, 1, "Ola");
// company.push("Amazon")
// console.log(company);


// More array Methods
// Map -> new array
// foreach -> no new array
//
// creates a new array with the results of new operation, 
//the val returns r used to form new array

// let nums = [60, 50, 40];
// nums.map(function(val){
//     console.log(val);
// })


// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(function(val){
//     return (val *2);
// })
// console.log(newArr);
// console.log(arr);
/////////////////////////////////////////

// 2. Filter 
// creates a new array of elmts that give true for a condition/filter
// if condition or filter is true then the element will be stored in new array.

// let abc = [1, 2, 3, 4, 5, 6];
// let result = abc.filter((num) =>{
//     return num%2 === 0;
// });
// console.log(result);


// Reduce 
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) =>{
//     return res+curr;
// })
// console.log(output);



// Finding sum..
// let arr = [1, 2, 3, 4];
// let sum = 0;
// for(let i of arr){
//     sum+= i;
// }
// console.log(sum);



// Finding greater num in array.
const nums = [1, 2, 3, 4, 10];
const max = Math.max(...nums);
console.log(max);
////////////////////////////////////////



// let arr = [90, 92, 93, 95, 70];
// let a = arr.filter((val)=>{
//     return val > 90;
// });
// console.log(a);

// making array from user input.
// let n = prompt("Enter a number");
// let arr = [];
// for(let i = 1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let fact = arr.reduce((h1, h2)=>{
//     return h1*h2;
// });
// console.log(fact);
