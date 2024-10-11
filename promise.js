/*Promises:
promise is for "eventual" completion of task, its an obj in JS.
its a solution to callback hell.
(resolve and reject are callbacks provided by JS);

promise obj can be :
1. Pending : the result is undefined.
2. resolved: the result is a fulfilled.
3. Rejected: the result is an error obj.

 How to use promises.
 .then() and .catch()
 promise.then((res) =>{})
promise.catch((err)=>{}).*/
////////////////////////////////////////////////////

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task is completed.")
        resolve()// connects resolve with then
    },1000)
})
//for consuming promise use .then(). .then() has a direct relation with resolve.
// .then() =>> fnc(callback) which automatically receives as an arg.
promiseOne.then(function(){
    console.log("promise consumed")
})

// promise 2 :
new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("Task 2 is completed")
        resolve("Hwllo sudaisn")
    },1000)
}).then(function(){
    console.log("promise 2 consumed")
})

//promise 3 :
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
    resolve({username:"Sid", email:"khanedit1010@gmail.com" })
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// promise 4 :(then and catch)
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Sudais", password:"123"})
        } else {
            reject("ERROR: something went wrong")
        }
    },2000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Promise is either resolved or rejected")
})

// Promise 5: (async await)
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", password:"123"})
        } else {
            reject("ERROR : JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response)
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive()

/////////////////////////////////////////////////
// async
async function getAll(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.log(error)
    }
}
getAll()

// promise.
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error))


