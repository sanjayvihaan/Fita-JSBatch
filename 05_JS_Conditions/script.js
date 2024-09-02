// ---------------------- Simple if:

let num1 = 40;

/*
if (condition) {
    statements - to execute
}
*/

if (num1 === 40) {
    console.log('Yes, this is 40 and you are right');
}

// ----------------------  if - else statement:

/*
    if (conditions) {
        statements - to execute
    }
    else {
        statements - if the conditions is false execute this.
    }
*/


let a = 1;
let b = 5;

if (a > b) {
    console.log("Yes, a is greater than b")
}
else {
    console.log("a is less than b");
}


// ---------------------- else if Statement ----------------------------

let age = "I don't want";

if (age < 18) {
    console.log("You can't vote - minor");
}
else if (age > 70) {
    console.log("you can't vote - Senior");
}
else if (age >= 18) {
    console.log("You can vote");
}
else {
    console.log("Give a proper number or age");
}


// age is less than 18 - false
// age is more than 18 - true
// age is more than 70 - false


// -------------------- Ternary operator ----------------------------

/*
    variableName = (condition) ? value1(true) : value2(false)
*/
let num = 0;
let ternary = (num === 0) ? "This is zero" : "This is not zero";

console.log(ternary);


