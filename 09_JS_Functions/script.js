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