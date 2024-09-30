// json 
// 1. stringify.... converts object to string
obj = {name: "Sudais", age: 21, a:{this: "that"}}
jso = JSON.stringify(obj)// converts to string
console.log(obj)
console.log(jso)
//2. parse....string to an obj.
parsed = JSON.parse(`{"name":"Sudais","age":21,"a":{"this":"that"}} `)
console.log(parsed);

// Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`)

