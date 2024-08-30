let mySkills = "Python"


// Array - is a special variable, which can hold more than one value

let mySkills1 = "JavaScript";
let mySkills2 = "Python";


let mySkillsSets = ["Python", "JavaScript", "React", "NodeJs", "AWS", "DevOps"];

console.log(mySkillsSets);

// Access one value in array:
console.log("My skills length: ", mySkillsSets.length);

console.log(mySkillsSets[0]);


// Add Element into Array in the last index:
mySkillsSets.push("NextJS");
console.log(mySkillsSets);

// Add Element into Array in the first index:
mySkillsSets.unshift("Flutter");
console.log(mySkillsSets);

// Remove any value in an Array from last index
mySkillsSets.pop();
console.log(mySkillsSets);

// Remove any value in an Array from middle
let newArray = ["value", true, 80, "Python", 20];
console.log(newArray);

newArray.splice(2, 3);
console.log(newArray);

// Empty an Array
newArray = [];
console.log(newArray);

newArray.length = 0;

// Finding the positon of a particualar element in an Array:
let len = mySkillsSets.indexOf("JavaScript",0);
console.log('The word index in the position of ',len);


// Check if array or not;
let checkArray = 5;
console.log(Array.isArray(checkArray));
console.log(Array.isArray(mySkillsSets));


//Split a string or sentence into array elements:

let sentence = "Today we are learning Array in JavaScript";
let ary = sentence.split(' ');
console.log(sentence);
console.log(ary);

let welcome = "How are we moving with JavaScipt?";
let re = welcome.split('o');
console.log(re);

let url = 'https://github.com/canopas/web-developer-roadmap-2023?tab=readme-ov-file#htmlcss'

let urlSplit = url.split('?')[1];
console.log(urlSplit);

let newUrlSplit = urlSplit.split('#');
console.log(newUrlSplit);


// Join array elements into a string or sentence:

let arrySent = ['Today', 'we', 'are', 'learning', 'Array', 'in', 'JavaScript'];

let joinSent = arrySent.join(' ')
console.log(joinSent);


// Joining two or more array

let arry1 = ["one", "two", "three"];
let arry2 = [1, 2, 3, 4];
let new_arry = arry2.concat(arry1);
console.log(new_arry);


// Search an element in an array:

let cars = ["Tata", "Toyta", "Range Rover", "Maruti"];
let searchEle = "dfakdsjf";
let found = false;
console.log(cars);

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === searchEle) {
        found = true;

        console.log(`Found ${searchEle} at index ${i}`);
        break;
    }
}

if(!found) {
    console.log(`${searchEle} not found in the array`);
}