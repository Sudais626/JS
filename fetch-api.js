/* Fetch API(Application programming interface) :
The fetch API provides an interface for fetching(sending/receiving) resources.
It uses Request and Response objs.
The fetch() method is used to fetch a resource(data).
fetch() returns a promise.

AJAX : is Asynchronus JS & XML.
JSON : is JavaSrcipt Obj Notation.
AJAJ: Asynchronus JavaScript & Json.
json() method : returns a promise that resolves with the result of parsing the response body text as JSON,
(input is Json, output is JS obj).

Request and Response:
get, patch, delete etc.
HTTP(hyper text transfer protocol) verbs
Response status code.
headers(aditional info)
*/ 

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


// Example 2 : (showing the text on html file)
// On async await
const URL = "https://cat-fact.herokuapp.com/facts";
let cat = document.querySelector("#cat")
let btn = document.querySelector("#btn")

async function getAll() {
    try{
        console.log("Fetching data...")
        let response = await fetch(URL);
        let data = await response.json()// it returns a 2nd promise that's y we need to await it.
        // console.log(data[0].text)
        cat.innerText = data[3].text
    } catch(error){
        console.log(error)
    }
}
btn.addEventListener("click", getAll);



// On promise
const URL = "https://cat-fact.herokuapp.com/facts";
let cat = document.querySelector("#cat")
let btn = document.querySelector("#btn")
function getAll(){
    fetch(URL).then((response)=>{
        return response.json()
    }).then((data)=>{
        // console.log(data);
        cat.innerText = data[0].text
    })
}
btn.addEventListener("click", getAll);
