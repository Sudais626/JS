// async await>>promise chains>> callback hell;
/*Synchronus :
It means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the prev instruction to complete its execution.

Asynchronus :
Due to synchronus programming, sometimes imp instructions get blocked
due to some prev instruction, which cause delay in the UI.
Asynchronus code execution allows to execute next instructions immediately and 
doesn't block the code.*/


// it won't wait for the time fnc and will get executed.
// and the fnc will executed after the time delay
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("HEllo my name is Sudais khan");
}, 3000);

console.log("three");
console.log("four");

////////////////////////////////////////////////////////
// Callback :
//A callback is a fnc passed as an argument to another function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sum){
    sum(a,b);
}
calculator(1,2,sum);
/////////////////////////////////

function add(a,b){
    console.log(a+b);
}
function calc(x,y,add){
    add(x,y)
}
calc(2,2,add)
/////////////////////////////////////////////////////
// nesting:
// if - else
let age = 19;
if(age>=18){
    if(age>=60){
        console.log("senior");
    } else {
        console.log("middle");
    }

} else {
    console.log("child");
}

/*Callback Hell :
nested callbacks stacked below one another forming a pyramid structure.
(pyramid of doom);
the style of programming bcms difficult to understand and manage.
*/
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// getData(1, getData(2))
// it will throw error 
// so we will use the callback as an arrow fnc.

// its callback hell .
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        });
    });
});
////////////////////////////////////////////////////

/*Promises:
promise is for "eventual" completion of task, its an obj in JS.
its a solution to callback hell.
(resolve and reject are callbacks provided by JS);

promise obj can be :
1. Pending : the result is undefined.
2. resolved: the result is a fulfilled.
3. Rejected: the result is an error obj.
*/
let promise = new Promise((resolve,reject)=>{
    console.log("Im a promise");
    // resolve("success")
    reject("some error occured")
})


// promise example 
function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    })
    }
    let res = getData(123);
    

// How to use promises.
// .then() and .catch()
// promise.then((res) =>{})
//promise.catch((err)=>{}).