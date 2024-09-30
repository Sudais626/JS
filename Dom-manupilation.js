/* window obj .
it is a global obj with lots of properties and methods.
. it is browsers obj (not JS) & is automatically created by browser.
*/
/////////////////////////////////////////////
// used for dynamic changes (manupilation)
// DOM(document obj model).(accessing html through JS)
// when a web page is loaded, the browser creates a document obj model 
// of the page 
//All HTML elements become objs in JS known as document 
// and we can access it 
// console.log(document.body);
///////////////////////////////////////////////////////////////

// 1. selecting with id
// document.getElementById("heading").style.backgroundColor = "Red";
// const btn = document.getElementById("btn")

// btn.onclick = function(){
//     heading.innerText = "Sudais Khan"
//     heading.style.backgroundColor = "green"
//     topic.style.backgroundColor = "yellow"

// }

// 2. selecting with class
// let p = document.getElementsByClassName("p");
// console.log(p);

// 3. selecting with Tag
// let a = document.getElementsByTagName("h1");
// console.log(a);

/////////////////////////////////////////////////////
// 4. query selector.
//selector returns first element .
// selector all returns all elements(nodelist).
// for selecting id use # and for class use dot .

// let elements = document.querySelector("p");// first element
// console.log(elements);

// let a = document.querySelectorAll("p");// all elements.
// console.log(a);

/*properties : values (get(check) and set(change))
1.tagName: returns tags for elements nodes.
2.innertext:returns the text content of elemnt and all its children.
3.innerHTML: returns the plain text or HTML contents in element.
4.textcontent:returns textual contents even for hidden elements.
*/
//2. returns the text .
// let div = document.querySelector("div");
// console.log(div.innerText);


//3. returns HTML content.
// console.log(div.innerHTML);
//4. text content
// console.log(div.textContent);
// div.innerText = "Sudais khan"
////////////////////////////////////////////

// let heading = document.querySelector("h1");
// heading.innerHTML = "<i>Welcome</i>";
/////////////////////////////////////////////

let a = document.querySelector("h2");
a.innerText = a.innerText + " From Aimers"

// let b = document.querySelectorAll(".box");
// b[0].innerText =  "This is Box 1";
// b[1].innerText = "This is Box 2";
// b[2].innerText = "This is Box 3";


// let btn = document.getElementById("btn");
// let heading = document.getElementById("heading");
// btn.onclick = function(){
//     heading.innerHTML = "<i>Hello Sudais Khan</i>"
//     heading.style.backgroundColor = "red"
// }


// using For loop .
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = `New unique value ${idx}`;
//     idx++;
// };

///////////////////////////////////
// Attributes 
// 1. getAtrr. (to get the attribute val)
//2.setAtte.(to set the attr val).

// 1. getAttr.

let div = document.querySelector("div");
console.log(div);
