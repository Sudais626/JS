// Function : A block of code that performs
// a specific task, can be used when needed.
// inp k base p output k kaam
//local var ---> which lies in that block of code only
// fnc params --> local vars of fnc--> block scope.
///////////////////////////////
// higher order fnc/mthds: use other fncs as parameter or return a fnc

// function myFunction(){
//     console.log("Sudais Khan");
//     console.log("We are learning JS");
// }
// myFunction();

// function myFunction(msg){ // (inputs --> parameters)
    // console.log(msg);
// }
// myFunction("Hello")// argument

// the value inside function def (parameter)
// the value inside funtion call (arguments)

// function sum(x,y){
//     console.log(x+y);
// }
// sum(1,1);


function evenodd(num){
    if(num%2===0){
        return `${num} is even`;
    }
    else {
        return `${num} is odd`;
    }
};
console.log(evenodd(2));










//////////////////////////////////////////////
// function abc(x,y){
//     s = x+y;
//     return s;
// }
// let val = abc(1,2)
// console.log(val);

// function avg(a, b){
//     return (a+b)/2;
// }
// c1 = avg(10,10);
// console.log(c1);

////////////////////////////////////////////
// summ = (a,b) =>{
//     return a*b;
// }
// val = summ(10,3);
// console.log(val);
///////////////////////////////////////

//local var ---> which lies in that block of code only

/////////////////////////////////
// Arrow fncs : compact(small) way of writing a fnc.
// used for small fncs.
// summ = (a,b) =>{
//     return a*b;
// }
// val = summ(10,3);
// console.log(val);


// const arrowMul = (a,b) =>{
//     return a*b;
// }
// c1 = arrowMul(2,3);
// console.log(c1)

// const printHello = ()=>{
//     console.log("Hello");
// }
// printHello();


// const abc = () => console.log("Hello");
// abc();
///////////////////////////////////////////////////////////
// function countVowel (str){
//     let count = 0;
//     for (let char of str){
//     //  if(char === "a") or (char ==="e") or (char==="i") or (char==="o") or (char==="u"){
//        if(char === "fosdfknao"){
//         console.log();
//        }
//         else if(char ==="a"){
//             count++;
//         }
//         else if(char ==="e"){
//             count++;
//         }
//         else if(char ==="i"){
//             count++;
//         }
//         else if(char==="o"){
//             count++;
//         }
//         else if(char==="u"){
//             count++;
//         }
//      }
//     }
//     console.log(count);
// }

// For each fnc: callback fnc (to execute for each elmnt in array)
// callback is fnc passed as an argument to anthr fnc.

// let arr = [1,2,3,4,5];
// arr.forEach(function abc(val){
//     console.log(val);
// });
// let arr = ["sudais", "khan", "arham"];
// arr.forEach((val, idx)=>{
//     console.log(val.toUpperCase(), idx);
// });

// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// })

// const numbers = [1,2,3,4,5,];
// numbers.forEach(function(abc){
//     console.log(abc);
// });


// const fruits = ["Apple",  "Mango", "Banana"];
// fruits.forEach(function(fruit, idx){
//     console.log(`Index ${idx} : ${fruit}`)
// });

// let nums = [1, 2, 3, 4, 5];
// nums.forEach(function(num,idx,array){
//     array[idx] = num*2;
// });
// console.log(nums);
/// nums.forEach((num)= {

//})

// let apple = ["Sudais", "Khan"];
// for(let i of apple){
//     console.log(i);
// };


// finding squares
// let arr = [1, 2, 3, 4];
// for(let i of arr){
//     console.log(i*i);
// }

// 2
// let arr = [1, 2, 3, 4];
// arr.forEach(function(num){
//     console.log(num*num);
// })


// creates a new array with the results of new operation, 
//the val returns r used to form new array
// Map -> new array
// foreach -> no new array
/* forEach is used for normal calc or printing.
Map is used when v want to create new array using values  creating new array.*/


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



// 2. Filter 
// creates a new array of elmts that give true for a condition/filter
// if condition or filter is true then the element will be stored in new array.

// let abc = [1, 2, 3, 4, 5, 6];
// let result = abc.filter((num) =>{
//     return num%2 === 0;
// });
// console.log(result);


// // Reduce (prev val and new);
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) =>{
//     return res+curr;
// })
// console.log(output);


// let arr = [1, 2, 3, 4];
// let sum = 0;
// for(let i of arr){
//     sum+= i;
// }
// console.log(sum);

// finding largest number in array 
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((prev, curr)=>{
//     return prev > curr ? prev :curr
// });
// console.log(output);

// const numbers = [1, 2, 3, 4, 5];

//     function larNum(arr){
//         if (arr.length===0){
//             return undefined
//         }
//     let max = arr[0];
//     for (let i of arr){
//     if (i>max){
//         max = i;
//     }
    
// }
// return max;
// }
// const largestNumber = larNum(numbers);
// console.log(largestNumber);

// foreach.
// calls a fnc , once for each array elmnt.

const a = [1,2,3];
a.forEach((val, idx, array)=>{
    return val + val;
});
console.log(val);