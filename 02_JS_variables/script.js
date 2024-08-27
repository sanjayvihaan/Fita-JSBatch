/*var - This is a gloabal scoped and can be update and re-declare the values

let - This is a block scope and can be update but we cannot re-declare

const - THis is block scope and we cannot be able to update or re-declare

Global Scope: A variable declared outside a function, this means all the scripts and functions on a web application or website can be access this variable.
// Block Scope: It will be declared inside a block. This variable will be inside functions, loops, if-statements or other declarations.

*/

var name = "Sanjay";
console.log(name);

let number = 5000;
console.log(number);

const place = "Banglore";
console.log(place);

// ------------- Var
//Update
name = "Ram";
console.log(name);

//Re-declare
var name = 15;
console.log(name);

// ------------- let -------------
//Update
number = 3000;
console.log(number);

//Re-declare
// let number = 2000;  -- We will get error
// console.log(number);

// -------------- const ------------

//update
// place = "India";
// console.log(place);

// //re-declare
// let place = "Karnatake";
// console.log(place);
