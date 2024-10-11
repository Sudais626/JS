/*Class : template for creating obj (blueprint)
class is a program-code template for creating
objs.
those objs will have some variables and fncs isnide it. 
*/

// Example 1. 
// class Form{
//     submit(){
//         alert(this.name + " : form submitted for train id:" + this.id)
//     }
//     cancel(){
//         alert(this.name + " : form canlcelled for train id:" + this.id)
        // this.id = 0;
//     }
//     fill(name,id){
//         this.name = name;
//         this.id = id; 
//     }
// }
// let a = new Form();
// a.fill("Sudais", 43232)
// let b = new Form();
// b.fill("khan",34232)
// a.submit();
// b.submit();
// a.cancel();
///////////////////////////////////
// Example 2 :
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     setName(newname){
//         this.name = newname;
//     }
// }
// let a  = new Person("Sudais");
// a.setName("KHAAAAN")
// console.log(a)
////////////////////////////////////////

// Example 3 . ( constructor)
// special method in class
// automatically called always when obj is created
//for initialize the properties of new obj with specific values.

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let b = new Person("Sudias khan ", 21);
// console.log(b);
// console.log(b.name);
// console.log(b.age);
////////////////////////////////////////////////////

// Inheritance..
/* Inheritance : inheritance is passing down
 mehtods and properties from parent to
 child class ..
* if child and parent hav same methods, childs methods 
will be used (overriding) */


// class Animal{
//     constructor(name,color){
//         this.name = name ;
//         this.color = color;
//     }
//     run(){
//         console.log(this.name + " is running")
//     }
//     shout(){
//         console.log(this.name + " is shouting")
//     }
// }

// class Monkey extends Animal {
//     eat(){
//         console.log(this.name + "is eating banana")
//     }
// }
// let a = new Animal("Boor", "White");
// let b = new Monkey("mooo", "black");

// a.run();
// b.run();
// b.shout();

///////////////////////////////////////////////
// Overriding .
class Employee {
    login(){
        console.log(`Log in`)
    }
    logout(){
        console.log(`logout`)
    }
    leaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class programmer extends Employee {
    cofee(x){
        console.log(`Employee has requested ${x} cofees`)
    }
    //override the leave method
    leaves(leaves){
        // console.log(`Employee has requested ${leaves +1} leaves(one extra)`)
        super.leaves(5)
    }
}

let a = new programmer();
a.login();
a.leaves();
