let btn = document.querySelector("#btn");
let body = document.querySelector("body")
let mode = "light";
btn.addEventListener("click", () =>{
        if(mode==="light"){
                mode = "dark"
          body.style.backgroundColor = "black";
        body.style.color = "white";
         btn.innerHTML = "light mode"

        }
        else {
                mode = "light"  ;
        body.style.backgroundColor = "white";
        body.style.color = "black";
         btn.innerHTML = "dark mode"
        }
        console.log(mode);
})

// another simple method
// let btn = document.querySelector("#btn");
// let body = document.querySelector("body");
// let mode = "light";
// btn.addEventListener("click", ()=>{
//     if(mode==="light"){
//         mode = "dark"
//     body.classList.add("dark");
//     body.classList.remove("light");
//     }
//     else {
//     mode = "light"
//     body.classList.add("light");
//     body.classList.remove("dark");
//     }
//     console.log(mode)
// });
/////////////////////////////////////////////////////
// timer 
// function  countdown(seconds, callback){
//         let count = seconds;
//         const interValid = setInterval(() => {
//             if(count<=0){
//                 clearInterval(interValid);
//                 callback("Time's up");
//             }else {
//                 console.log(`Time remaining: ${count} seconds`);
//                 count--;
//             }
//         }, 1000);
//     }
//     countdown(10, (message)=>{
//         console.log(message);
//     })
///////////////////////////////////////////////////////////////
// let btn = document.querySelector("#btn");
// btn.addEventListener("mouseover", dark)
// btn.addEventListener("mouseout", light)
// function dark(){
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white"
// }

// function light(){
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black"
// }