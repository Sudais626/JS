/* Callback:  
A fnc that is passed as an argument to another fnc.

used to handle asynchronus operations.
1. Reading a file.
2. Network requests.
3.Interacting with databases.

"Hey, when you are done, call this next."
"guaranteeing that the fnc passed in(as arg) will execute next"
*/

//Here callback is a parameter.
function hello(callback){
    console.log("Hello!");
    callback();
}
function bye(){
    console.log("Goodbye");
}

function leave(){
    console.log("leaves...")
}

hello(leave);

// Example 2 :
function add(callback,x,y){
    let res = x+y;
    callback(res);
}
function calc(res){
    console.log(res)
}
add(calc,2,2);
////////////////////////////////////////////////////

function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function cal(x,y,operations){
    return operations(x,y)
}
cal(1,2,add);
//////////////////////////////////////////////////
function add(callback,a,b){
    let res = a+b;
    callback(res)
}
function cal(res){
    console.log(res)
}
add(display,3,2)

function display(res){
document.getElementById("myh2").textContent = res
}


