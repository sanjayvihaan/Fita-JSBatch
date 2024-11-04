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

// --------------- Method / Action --------------------------

let person = {
    name: "Sanjay",
    age: 20,
    sayHello: function() {
        console.log("Yu said Hello! to ", person.name);
    }
}

person.sayHello();
person.sayHello();
person.sayHello();


// 2nd Method:

let person2 =  {
    name: "Sanjay",
    age: 20,
}

person2.sayHello = function() {
    console.log("Yu said Hello! to person2 ", person2.name);
}    

person2.sayHello();


// 3rd Method:

let person3 = {
    name: "Ram",
    age: 20,
}

person3.sayHello = greet;

function greet() {
    console.log("Yu said Hello! to person3 ", person3.name);
}

person3.sayHello();

// 4th Method:

let person4 = {
    name: 'Rana',
    age: 20,
    sayHello () {
        console.log("Yu said Hello! to person4 ", person4.name);
    }
}


let message = {
    name: "Sanjay",
    platform: "Whatsapp",
    messageFrom: function() {
        console.log(`${this.name} has sent a message on ${this.platform}`);
    }
}

message.messageFrom();



person4.sayHello();
person4.sayHello();


// ------ This keyword ------------


let car = {
    brand: "Tata",
    model: "Nexon",
    start: function() {
        console.log(`${this.brand} ${this.model} is famous`);

        console.log(car.brand + " " + car.model + " is famous")
    }
}

car.start();


// --------- Real case sen of object Method as function -----------------


let User = {
    firstName: "Sanjay",
    lastName: "V",
    age: 20,
    email: "sanjay@gmail.com",


    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },


    // Method to update email   
    updateEmail: function(newEmail) {
        this.email = newEmail;
        console.log(`Email is updated to: ${this.email}`)
    }
};

console.log(User.getFullName());
User.updateEmail("sanjayvihaan111@gmail.com")
console.log(User.email)


// -------- Real time Chat 


let chatRoom = {
    messages: [],
    users: ['Sanjay', 'Ram'],

    // Method to send Message:
    sendMessage: function(user, message) {
        this.messages.push({
            user, message, timestamp: new Date()
        })
        console.log(`${user} says: ${message}`)
    },

    // Notify the users
    notify: function(user) {
        console.log(`Notification sent to ${user}`);
    }

}


console.log(chatRoom);

chatRoom.sendMessage('Sanjay', "Hello, everyone all doing good");
chatRoom.sendMessage('Ram', "Hello, everyone all doing good");
chatRoom.notify("Sanjay");



// Math Objects:

console.log(Math.PI);
console.log(Math.ceil(2.45)); // Give the top value
console.log(Math.floor(2.45)); // Give the bottom value
console.log(Math.round(4.45)); // Give the round value of it.
console.log(Math.trunc(4.8)); // Removes the point
console.log(Math.pow(10, 2)) // give the power;
console.log(Math.sqrt(25)) // give sqareroot;
console.log(Math.min(5, 9, 10, -2, 40, 88)) // gives minimum value
console.log(Math.max(5, 30, 100, 40, 33, 60)) // give max value


// Generating the random number

console.log(Math.random());

let random = Math.floor(Math.random() * 11);
console.log(random);

// Generating the random number in range

let range = Math.floor(Math.random() * (30 - 15)) + 15; // Math.floor(Math.random() * (max-num - min-num)) + min-num
console.log(range)