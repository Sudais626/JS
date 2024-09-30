// DOM Manupilation 

// document.getElementById('btn').style.border = "2px solid blue"
// document.getElementById('btn').style.backgroundColor = "aqua"

let a = document.getElementById('btn');
// console.log(a);



let b = document.getElementsByClassName('container')
// console.log(b);
// b[0].style.backgroundColor = "yellow"
// b[0].classList.add("bg-prm")

// b[0].classList.add("text")
// b[1].style.border = "1px solid black"
// b[1].style.backgroundColor = "white" 

// and for removing 
// b[0].classList.remove("text")

//
// console.log(a.innerHTML);
// console.log(a.innerText);
// console.log(b[0].innerHTML);
// console.log(b[0].innerText);


// //
//  tn = document.getElementsByTagName("div")
// console.log(tn)
// createdElement = document.createElement("p");
// createdElement.innerText = "My name"
// tn[1].appendChild(createdElement);//

// createdElement2 = document.createElement("b");
// createdElement2.innerText = "This is Bold"
// tn[0].replaceChild(createdElement2, createdElement);



// cd = document.createElement("h1");
// cd.innerText = "Object"
// tn[1].appendChild(cd);


// let c  = document.getElementsByClassName('container');
// c[0].style.backgroundColor = "yellow"


// tn = document.getElementsByTagName('div')
// console.log(tn);
// a = document.createElement("p")
// a.innerText = "This is Para"
// tn[0].appendChild(a);
// b = document.createElement("b")
// b.innerText = "This is Bold"
// tn[0].replaceChild(b, a);// replace method


//Selecting using Query
sel = document.querySelector('.container')//returns single element
console.log(sel)
sel = document.querySelectorAll('.container')// returns all (a node list)
console.log(sel)





















