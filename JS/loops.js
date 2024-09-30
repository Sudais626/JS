var arr = [1,2,3,4,5,6,7,8]
// console.log(arr);
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// Another method for array
// arr.forEach(function(element){
//     console.log(element);
// })


// let j = 0;
// while(j<arr.length){
//     console.log(arr);
//     j++;
// }

// For loop 
// var a = 20;
// for(var i = 0; i<a; i++){
//     console.log(i)
// }
// while loop
// let j=0;
// while(j<a){
//     console.log(j);
//     j++
// }

// Do while loop
// let j = 0;
// do{
    // console.log(j);
//     j++;
// } while (j<a);


// Continue (leave this iteration and move to another one)
var arr = [1,2,3,4,5,6,7];
for(var i = 0 ; i<arr.length;i++){
    if(i==2){
        continue;
    }
    console.log(arr[i]);
}



// Break ( stop looping)


// var arr = [1,2,3,4,5,6,7];
// for(var i = 0; i<arr.length; i++){
//     if(i==2){
//         break;
//     }
//     console.log(arr[i])
// }