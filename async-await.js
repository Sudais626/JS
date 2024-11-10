/* Async-Await:
Async fnc always returns a promise.
await pauses the execution of its surrounding async fnc until the promise is settled.
*/

const pr = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Sudais12", password:123})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

async function getAll(){
    try{
        const res = await pr
        console.log(res)
    } catch(error){
        console.log(error)
    }
}
getAll()


// Example 2 :
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("data", dataId)
            resolve("success")
        },1000)
    })
    
}
async function getAll(){
    await getData(1)
    await getData(2)
    await getData(3)
}
getAll()

/*IIFE(it execute automatically) : Immediately invoked fnc expression.
it is a fnc that is called immediately as soon as it is defined.
in order to exexute the async fnc we need to call the async fnc so
if we don't wanna call a fnc we can use this method.
to use we will remove the fnc name and we will enclose the fnc in curly brace to whole fnc,
and at the end we will add 1 empty curly brace too.*/

(async function getAll(){
    await getData(1)
    await getData(2)
    await getData(3)
})();

//////////////////////////////////////////////////////
// Example 3 :
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
//////////////////////////////////////

// Example 4 :
const p = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve({username:"sudais12", password:123, id:12123})
    },1000)
})

async function getAll(){
    const a = await p
    console.log(a);
    console.log(a.username)
    console.log(a.id);
    console.log(a.password)
}
getAll()

// Example 5 : 
function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, ms)
    })
}
async function fetchData(){
    console.log("Fetching data...")
    await delay(2000)
    console.log("Data fetched!")
}
fetchData()
