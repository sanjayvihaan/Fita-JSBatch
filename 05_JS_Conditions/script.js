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


// ---------------------- Switch Statement ----------------------------

// switch(condition){
//     case 1:
//         statement;
//         break;
//     case 2:
//         statement;
//         break;
// }


let input = 4;

switch(input) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break
    case 3:
        console.log("Three");
        break
    case 4:
        console.log("Four");
        break
    default:
        console.log("This is a default (switch)");
}

// ------------------

let day = "x";
let dayName;

switch (day) {
    case "x":
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4: 
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = "Invalid day"
}

console.log(dayName); // Output: Thursday

let myCurrentDate = new Date();
console.log(myCurrentDate);


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}
  
console.log(day);