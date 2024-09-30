// // primitive datatypes (7) 
// // non-premitive ..(objects(arrays , functions))

// // 1. primitive datatypes
// // 1. numbers
// age = 21;
// // console.log(typeof(age));

// // 2. strings 
// let name = "Sudais Khan";
// // console.log(typeof(name));

// // 3.Boolean 
// isFollow = true;
// console.log(isFollow);

// // 4.undefined
// let x ;

// // 5.. null(absence of obj)
// let y = null;
// console.log(typeof(y));

// // 6.. BigInt
// let a = BigInt("123");

// //7. symbol
// let b = Symbol("Hello!")


// Objects..(key value pairs)
// collection of values 
// or collection of different variables
// v can change let variables and can't change const
// v can only change the key in const obj

const ab = {
    name: "Sudais khan",
    age: 21,
    isPass: true,
    marks: 50
}
console.log(ab["name"])
// another method
console.log(ab.name)

// changing values 
// ab.age = ab.age+1;
ab["age"] = ab["age"] + 1;
ab["name"]  = "Rahul"
console.log(ab.name)