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

//////////////////////////