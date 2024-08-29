// Assignment operator:
let a = 20;
let b = 30;
console.log(`The value of a is ${a}`);
console.log('The value of b is ' + b);

// Addition operator
let add = a + b;
console.log(`The sum of a and b is ${add}`);

// Subtract operator
let sub = a - b;
console.log(`The sub of a and b is ${sub}`);

// Multiplication operator
let mul = a * b;
console.log(`The product of a and b is ${mul}`);

// divison operator
let div = a / b;
console.log(`The divison of a and b is ${div}`);

// modulus operator
let mod = a % b;
console.log(`The modulus of a and b is ${mod}`);


// ------------------ JS Assignment Operators ----------------

/* 
    1. = 
    2. +=   -> a = a + b -> a += b
    3. -=   -> a = a - b -> a -= b
    4. *=   -> a = a * b -> a *= b
    5. /=   -> a = a / b -> a /= b
    6. %=   -> a = a % b -> a %= b
    7. **=  -> a = a ** b -> a **= b

*/

console.log("a = a + b = ", a += b);
console.log("a = a - b = ", a -= b);
console.log("a = a / b = ", a /= b);
console.log("a = a * b = ", a *= b);


// ----------- Bitwise Operators------------- 
/* 
    1. Bitwise AND -- && -> If any one condition is false it will return false
    2. Bitwise OR  -- || -> If any one condition is true it will return true.
    3. Bitwise Not -- !
*/

console.log(4>3 && 4<1); //False 
console.log(4>3 || 4<1); //True
console.log(!true) // true


// ---------------- Increment operator and Decrement operator


a = 5;
let myincre = a++;
console.log(a);
console.log(myincre);


/* 

a = 5;: The variable a is initialized with the value 5.
let myincre = a++;:
Here, a++ will first return the current value of a (which is 5) and assign it to myincre.
Then, a is incremented by 1, so a becomes 6.
console.log(myincre);:
This will output 5 because myincre was assigned the original value of a before the increment.





// 

Initially, a is 5.
b = a++ means:
First, b is assigned the current value of a (which is 5).
Then, a is incremented by 1, so a becomes 6.
b will be 5, and a will be 6.


*/

let num1 = 6;
num1--  // num2 get the value of num1(6) before incrementing

// console.log(num2); // output 6
// console.log(num1)


//-----------------Type Of ------------------

//Data Types

let typeOf = "JavaScript"; //string
console.log(typeof(typeOf));

typeOf = 40; //number
console.log(typeof(typeOf));

typeOf = true; //boolean
console.log(typeof(typeOf));

let undefine; //undefined
console.log(typeof(undefine));


