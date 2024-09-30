// let n = 5; // num of rows
// for(let i = 1; i<=n; i++){
//     let stars = "";
//     for(let j = 1; j<=i; j++){
//         stars+= " * ";
//     }
//     console.log(stars)
// }


// let arr = [90, 92, 93, 95, 70];
// let a = arr.filter((val)=>{
//     return val > 90;
// });
// console.log(a);

// making array from user input.
let n = prompt("Enter a number");
let arr = [];
for(let i = 1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

let fact = arr.reduce((h1, h2)=>{
    return h1*h2;
});
console.log(fact);



