/*Class : template for creating obj (blueprint)
class is a program-code template for creating
objs.
those objs will have some variables and fncs isnide it. 
*/

// constructor . special method in class 
// automatically invoked by new, initializes obj


class toyotaCar {
    constructor(brand, mileage){
        console.log("creating new obj")
        this.brand = brand;
        this.mileage = mileage;
    }



    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}
let a = new toyotaCar("crown", 10)
let b = new toyotaCar("Lexus", 15);
console.log(a);
console.log(b);
// // console.log(a.start());
// // console.log(b.start());         

/////////////////////////////////
// class Car {
//     constructor(brand,model){
//         this.brand = brand;//this define the `brand` proprty
//         this.model = model;//this define the `model` proprty
//         console.log(`This car is a ${this.brand} ${this.model}`)
//     }
// }

// let a = new Car("Toyota", "Corolla");
// console.log(a);
///////////////////////////////////////////////


// class Car{
//     constructor(brand, color){
//         this.brand = brand;// property
//         this.color = color;
//     }
//     //Method (what the car can do)
//     start(){
//         console.log(`${this.brand} car is strarting..`);
//     }
// }
// // creating an obj (an instance of the class)
// let a = new Car("Toyota", "Red");
// a.start();

//////////////////////////////////////////////
// class Form{
//     submit(){
//         alert("form submitted")
//     }
//     cancel(){
//         alert(this.name + "form canlcelled")
//     }
//     fill(name){
//         this.name = name;
//     }
// }
// let a = new Form();
// a.fill("Sudais")
// let b = new Form();
// b.fill("khan")
// a.submit();
// b.submit();
// a.cancel();
