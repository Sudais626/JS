// simple Obj....
const student = {
    fullName : "Sudais Khan",
    marks : 90,
    printMarks: function (){
        console.log("marks = ", this.marks);// student.marks
        
    }
}
// reference to an obj.
//objs special property
// prototype --> obj inside an obj (methods and properties)
const employee = {
    calcTax (){
        console.log("Tax rate is 10%");
    }
}

// we can use this fnc in another obj using __proto.
const employee1 = {
    salary : 10000,
};
const employee2 = {
    salary : 10000,
};
const employee3 = {
    salary : 10000,
};
const employee4 = {
    salary : 10000,
};
const employee5 = {
    salary : 10000,
};

employee1.__proto__ = employee;
console.log(employee1.calcTax());

employee2.__proto__ = employee;
employee3.__proto__ = employee;
employee4.__proto__ = employee;
employee5.__proto__ = employee;

/////////////////////////////////////

// prototype : 
// A JS model is an entity having state and behavior (properties and methods).
// JS objs have a special property called prototype.
// we can set prototype using __prot__.

// if objs and prototype have same method , 
// objs method will be used.


