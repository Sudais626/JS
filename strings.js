/* Strings: 
    A sequence of characters used to present text.. 
strings r immutable(which doesn't change ) 
    */


// Methods or properties :
    // let str = "Sudais khan";
    // console.log(str.length);
    //
// console.log(str[0]);
// Template literals in JS
// A way to have embeded expressions in strings
// special type string
// string interpolation.
// let abc = `Sudais Khan`;
// let obj = {
//     item : "Pen",
//     price: 10,
// };
// console.log("The price of " , obj.item, "is", obj.price)
// let output = `The price of ${obj.item} is ${obj.price}`;
// console.log(output);

// Escape characters.
// back slash n for printing in next line 
// slash t . tab for spacing.
// its length is one character.

////////////////////////////////////////////////////
// Strings Methods 
// it returns a new value , doesn't change the string value.
// let str = "Sudais Khan"
// let str2 = "Tommy"
// // 1. uppercase 
// console.log(str.toUpperCase());
// // 2. lowercase 
// console.log(str.toLowerCase());
// // 3. trim (remove white spaces(from start and end))
// console.log(str.trim());
// //4. slice
// console.log(str.slice(0, 6));
// // console.log(str.slice(0));
// // 5. concat (joins str1 with str2)
// console.log(str.concat(str2));// we can use + too
// // console.log(str+str2);

// //6. replace
// console.log(str.replace("Sudais", "khan"));
// // console.log(str.replaceAll("Sudais", "Khan"))

// // 7. charAt (for finding character)
// console.log(str.charAt(0));

// str = str.replace ..
///////////////////////////////////////////////////
// let name = prompt("Enter your name :")
// let userName = name.length;
// let result = `@${name}${userName}`;
// console.log(result);

// another mehtod 
// let fullName = prompt("Enter ur full name without spaces:")
// let userName = "@" + fullName + fullName.length;
// console.log(userName);
