const student = {
    name: "Ram",
    age: 20,
    course: ["Btech", "Python", "C"]
}

console.log(student);
console.log(student["name"]); // Ram
console.log(student["age"]); // 20

student.name = "Rana";
console.log(student);

// Property:

// Delete property:
let data = {
    name: "Jeeva",
    age: 20,
    course: ["Btech", "Python", "C"]
}

console.log(data);

delete data.age;
console.log(data);


//Check if property exists:

let infos = {
    "index": 0,
    "isActive": false,
    "balance": "$3,513.89",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "green",
    "name": "Mcintosh Parrish",
    "gender": "male",
    "company": "SUREMAX",
    "email": "mcintoshparrish@suremax.com",
    "phone": "+1 (900) 560-3053",
    "city": 'Bangalore',
}

console.log("city" in infos)

// For loop through objects

let bank = {
    "index": 0,
    "isActive": false,
    "balance": "$3,513.89",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "green",
    "name": "Mcintosh Parrish",
    "gender": "male",
    "company": "SUREMAX",
    "email": "mcintoshparrish@suremax.com",
    "phone": "+1 (900) 560-3053",
    "city": 'Bangalore',
    "BankName": "SBI",
}

for (let key in bank){
    console.log(key);
}


for (let key in bank){
    console.log(`${key} : ${bank[key]}`)
}

// Method / Action

let person = {
    name: "Sanjay",
    age: 20,
    sayHello: function() {
        console.log("Yu said Hello! to ", person.name);
    }
}

person.sayHello();
person.sayHello();