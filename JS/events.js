// function clicked(){
//     console.log('The button is clicked')
// }
// window.onload = function(){
//     console.log("loaded")
// }

// Events in JS

// btn.addEventListener('click', function(){
//     console.log('Click huaa')
// })
// btn.addEventListener('mouseover', function(){
//     console.log("mouse on container")
// })
// btn.addEventListener('mouseout', function(){
//     console.log("mosue out container")
// })
// btn.addEventListener('mouseup', function(){
//     console.log("mosue up when clicked")//chora
// })
// btn.addEventListener('mousedown', function(){
//     console.log("mosue down when clicked")
// })// dabaya 




// FirstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     // document.getElementsByClassName('container')[1].style.background = "yellow"
// })


// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// FirstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mosue up when clicked");
// })
// FirstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>"
//     console.log("mosuedown when clilcked")
// })

// let a =  document.getElementsByClassName('container')[1].style.background = "yellow"
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML
// FirstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     document.getElementsByClassName('container')[1].style.background = "none"
// })

// FirstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have Clicked</b>"
//     document.getElementsByClassName('container')[1].style.background = "yellow"
// })

// Arrow Functions .. 
// function summ(a, b){
//     return a+b;
// }

// summ = (a,b) =>{
//     return a+b;
// }

// ----------------------------------------------------


// setTimeout and setInterval
// settimeout .... schedule things 
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
// cleartimeout for stopping
log = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval</b>"
    console.log("Im Your log")
}
// setTimeout(log, 2000);

//Another Method for set time
// setTimeout(() => {
//     console.log("My name is Sudais Khan")
// }, 2000);

// Setinterval ..... for running repeated functions
// clearinterval for stopping
// setInterval(log, 2000)



