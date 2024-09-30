// 1. getAtrribute (for finding attribute(id or class))
// let div = document.querySelector("div");
// let id = div.getAttribute("id");
// console.log(id);

// finding class
// let p = document.querySelector("p");
// console.log(p.getAttribute("class"));

// let a = div.getAttribute("name");
// console.log(a);

// 2. setAttr (changing attributes (class or id))
// console.log(p.setAttribute("class", "newClass"));

// 3. Node Style.
// let div = document.querySelector("div");
// div.style.backgroundColor = "red";
// div.style.fontSize = "24px";
// div.innerText = "hello";
// div.style.visibility = "hidden";
///////////////////////////////////////////////////////////////////////////


/* Insert Elements . 
let el = document.createElement("div");

1.node.append(el)-> adds at the end of node(inside).
2.node.prepend(el)-> adds at the start of node(inside).
3.node.before(el)-> adds before the node(outside).
4.node.after(el)-> adds after the  node(outside).
5.node.remove()-> removes the node.
*/

// a paragraph
// let el = document.createElement("p");
// el.innerText = "Hello my name is Sudais Khan"
// let div = document.querySelector("div");
// div.append(el);


// creating a button
// let btn = document.createElement("button");
// btn.innerText = "Login";
// div.append(btn);

// creating a h1 heading
// let h = document.createElement("h1");
// h.innerText = "Heading 1 : ";
// div.before(h);

// or
// let h1 = document.createElement("h1");
// h1.innerHTML = "<i>Welcome</i>";
// document.querySelector("body").prepend(h1);


// deleting .
// let para = document.querySelector("p");
// para.remove();

/////////////////////////////////////////
// creating a btn.
let btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "4px";
btn.style.padding = "6px 6px";

document.querySelector("body").prepend(btn);
///////////////////////////////////////
// adding new class to paragraph.
let p = document.querySelector("p");
p.classList.add("newclass");








