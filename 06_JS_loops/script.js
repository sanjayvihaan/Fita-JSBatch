// // --------------------- For loop -------------------

// // For - Loops through a block of code a number of time it is required
//     // For loop consists of three parts:
//         /* 
//             1. Initialization 
//             2. condition
//             3. Increment/Decrement
//         */


// /* 
// syntax:

// for(initialization; condition; increment/decrement) {
//     code to execute repeatedly
// }
// */

// // console.log("The number is 1")
// // console.log("The number is 2")
// // console.log("The number is 3")
// // console.log("The number is 4")
// // console.log("The number is 5")


// // for(let i = 1; i <= 100; i++) {
// //     let text = "";
// //     text = text + "The number is " + i;  

// //     console.log(text)

// //     console.log(i);
// // }



// // Fetching an array of users from a database:

// const users = [
//     {
//         id: 1,
//         name: "Doe",
//         email: "doe@gmail.com"
//     },
//     {
//         id: 2,
//         name: "Ram",
//         email: "ram@gmail.com"
//     },
//     {
//         id: 3,
//         name: "Smith",
//         email: "Smith@gmail.com"
//     },
//     {
//         id: 4,
//         name: "Rana",
//         email: "Rana@gmail.com"
//     }
// ]


// // for(let i = 0; i <= users.length; i++) {
// //     console.log("User Id :" + users[i].id);
// //     console.log("Name: " + users[i].name);
// //     console.log("Name: " + users[i].email);
// //     console.log("-----------------------------");
// // }

// // use for... of to iterate over users:

// // Example array fetched from a database
// // const employees = [
// //     { id: 1, name: "John Doe", email: "john@example.com" },
// //     { id: 2, name: "Jane Doe", email: "jane@example.com" },
// //     { id: 3, name: "Sam Smith", email: "sam@example.com" },
// //     { id: 4, name: "Sara Lee", email: "sara@example.com" }
// // ];

// // Use `for...of` to iterate over users
// // for (let user of employees) {
// //     console.log(`User ID: ${user.id}, User Name: ${user.name}, Email: ${user.email}`);
// // }


// // var cst = ChartCustomer.getDataSource().getMembers("Customer");
// // console.log(cst);

// // for(var k = 0 ; k< cst.length;k++){
// // 	DropdownCustomer.addItem(cst[k].id, cst[k].description);
// // };


// // Task - Print All the Even Number from 1 - 100 - 10th Sep 2024

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
//     // if ( i % 2 === 0) {
//     // }
// }


// // Task - Display Sum of n Natural Numbers

// let num = 10;
// let sum = 0;

// for(let i = 1; i <= num; i++) {
//     sum = sum + i;
//     // sum += i;
// }


// console.log(`Sum of n natural numbers is: ${sum}`);


// // Task - Iterate Through an Array 

// let lang = ["Python", "JavaScript", "React", "NodeJS", "Go"];

// console.log(lang);


// for(let i = 0; i < lang.length; i++) {
//     console.log(lang[i]);
// }


// // Task - Reversing a String

// let str = "Understanding"; //yajnas
// let reversed = "";

// let lastIndex = str.length - 1; // Initalize the last index
// console.log(lastIndex)

// for(let i = lastIndex; i >= 0; i--) {
//     reversed += str[i];
//     // reversed = reversed + str[i];
// }

// console.log(reversed);


// // Task - Factorial of a number

// // num = 6;
// // 1*2*3*4*5*6 = 720



// // ------------------------------ While loop and do while loop -------------------------


// // ----- while loop =======

// // while (condition) {
// //     // logic or code
// // }

// // Example - Print numbers 1 to 10

// // let i = 1;

// // while(i <= 10) {
// //     console.log(i);
// //     i++ // Increment after the value 1;
// // }


// for(let i = 1; i<= 10; i++){
//     console.log(i);
// }


// // let password;

// // while(password !== "1234") {
//     // password = prompt("Enter your password: ");

// // }

// // alert("Access granted");


// // ================== DO while ====================


// // do {

// // } while (){

// // }


// // print of number from 1 - 5

// // let ini = 1;

// // do{
// //     console.log(ini);
// //     ini++;
// // } while(ini <= 5);



// // Task - Factorial of a number


let factNum = 4;
let factorial = 1;

for(let i = 1; i <= factNum; i++) {
    // sum = sum + i;
    // factorial = factorial * i;
    factorial *= i
}

console.log(`Factorial of ${factNum} is ${factorial}`);