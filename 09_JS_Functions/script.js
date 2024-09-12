// function name(parameter) {
//     // code to be executed 
//     // logic of the function
// }

function users() {
    console.log("Welcome to my website");
}

users(); //Invokes or call the function



// Maths Table 
// 1
// 1 x 2 = 2
// 2



function table(number) {
    // 1 - 10
    for(let i = 1; i <= 20; i++) {
        let mul = number + "x" + i + "=" + (number * i) + "\n";
        console.log()
        console.log(mul);
    }
}

table(3);
console.log("----------------------------------");
table(15);


// Addition of two or more

function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

sum(3, 5, 5);


// ===================== Function with return keyword ========================

// Calculating the product of two number, and return the result:

function product(a, b) {
    // console.log(a*b);
    let pro = a * b;
    return pro; // Functions often compute a return value.
}


product(4, 8);

console.log(product(3, 5));
console.log(product(5, 5));



// ======================= Arguments property in Functions ===================


function argu() {
    if (arguments.length === 0) {
        console.log("No arguments passed");
    }
    else {
        console.log(arguments.length + " arguments is passed in it");
    }
}

argu();

argu("Hello");
argu("Hello", "Welcome to JavaScript");

argu();


// =========================== Function with default values ========================

function app(name = "Guest") {
    return `Hello ${name}`;
}

console.log(app("Sanjay"));
console.log(app());

console.log(app("Ram"));


// ======================= Anonymous Function ============================
// In this function we will define it without a function name and assign it to a vairable. This is called a Function Expression

let div = function(a, b) {
    return a / b;
}

console.log(div(4, 2)); // Calling the function using the vaiable name.


// ====================== Arrow Function ==============================


//Normal Function
let divs = function(a, b) {
    return a / b;
}

console.log(divs(4, 2)); // Calling the function using the vaiable name.



// Arrow function - ES6 version

let subs = (a, b) => {
    return a - b;
}

console.log(subs(5, 9));


// =========================== Project - Generating Ramdom Password ==========================

function genratePassword(length) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()/";
    let Password = "";

    for (let i = 0; i < length; i++) {
        let differentPassword = Math.floor(Math.random()  * characters.length);
        Password += characters[differentPassword];
    }

    return Password;
}

let newPassword = genratePassword(10);
// let newPassword = genratePassword(10);
console.log(newPassword);


console.log(genratePassword(20));
console.log(genratePassword(8));


// ======================== Validate Email Format =====================

function validEmail(email) {
    let emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    return emailPattern.test(email) // Test if the email matches the pattern
}


let email = "test@example.com";

if(validEmail(email)) {
    console.log("This email is valid: ", email );
}
else {
    console.log("This email is not valid: ", email);
}