/* Events :
The change in state of an obj is known as event.(like btn etc)
Events r fired to notify code of
"interesting changes" that may affect 
code execution
eg. click or double click etc
.form submit
.print event and many more*/
// .. priority JS (ot inline js)
//. last fnc wil run .
//////////////////////////////////////
// random . Btn
// let btn = document.createElement("button");
// btn.innerText = "Login";
// btn.style.backgroundColor = "white"
// btn.style.color = "blue";
// btn.style.padding = "10px 18px";
// btn.style.border = "1px solid blue"
// // btn.style.borderColor = "blac"
// btn.style.borderRadius = "5px";
// document.querySelector("body").prepend(btn);
/////////////////////////////////////////
/*1. onmouseover (hover)
 2.onmousedblclick(double clk)
 3.onclick (clk).
 4.onmousedown(pressed)
 5.onmouseup(unpressed).*/
///////////////////////////////////


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("U clicked btn 1");
// }

// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () =>{
// console.log("you double clicked on Btn 2");
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("You r hovering on div");
// }

// let btn3 = document.querySelector("#btn3");
// btn3.onmousedown = () => {
//     console.log("you pressed the btn 3");
// }
// btn3.onmouseup = () =>{
//     console.log("you unpressed btn 3");
// }

/* Event Obj :
It is a special obj that
has details abt the event..

All event handlers have access 
to event obj properties and methods.*/

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log("U clicked btn 1");
// }
///////////////////////////////////////////

/* Event listeners :(we can add add multple events handlers)
node.addEventlistener(event, callback(-> goes to another fnc as an argument.));
node.removeEventlistener(event, callback);
note : the callback should be same to remove.
*/
// we can add multiple event handlers in event listener
// same event multiple work 
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", ()=>{
//     console.log("btn1 was clicked");
// });
// btn1.addEventListener("mouseover", ()=>{
//     console.log("You are hovering on btn1");
// });
// btn1.addEventListener("mousedown", ()=>{
//     console.log("Btn 1 was pressed");
// });
// btn1.addEventListener("mouseup", ()=>{
//     console.log("Btn 1 was unpressed");
// });
// // removing event.
// const handler2 = () =>{
//     console.log("Btn 1 was clicked . handler 2");
// }
// btn1.addEventListener("click", handler2);

// btn1.removeEventListener("click", handler2);

// let dbtn = document.querySelector("#dbtn");
// dbtn.addEventListener("click",() => {
// document.querySelector("body").style.backgroundColor = "black";
// dbtn.innerText = "Light mode";
// });

// dbtn.addEventListener("dblclick", ()=>{
// document.querySelector("body").style.backgroundColor = "white";
// dbtn.innerText = "Dark mode";
// });


// Dark Mode ::
// let dbtn = document.querySelector("#dbtn");
// let currMode = "light";

// dbtn.addEventListener("click", ()=>{
//     if(currMode==="light"){
//     currMode = "dark";
// document.querySelector("body").style.backgroundColor = "black";
//     }
//     else {
//         currMode = "light";
// document.querySelector("body").style.backgroundColor = "white";
//     };

//     console.log(currMode);
// })

// let dbtn = document.querySelector("#dbtn");
// let body = document.querySelector("body");
// let mode = "light";
// dbtn.addEventListener("click", ()=>{
//     if(mode==="light"){
//         mode = "dark"
//     body.classList.add("dark");
//     body.classList.remove("light");
//     }
//     else {
//     mode = "light"
//     body.classList.add("light");
//     // body.classList.remove("dark");
//     }
// });

// let btn3 = document.querySelector("#btn3");
// let p = document.querySelector("p")
// btn3.addEventListener("mouseover", () =>{
// btn3.style.backgroundColor = "blue" 
// btn3.style.color = "white" 

// })


