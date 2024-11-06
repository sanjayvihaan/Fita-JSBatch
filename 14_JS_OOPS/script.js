// Objects and Class

let User = {
    name: "Sanjay",
    age: 20,
}

console.log(User)
console.log(User.name);

// Class

class Car {
    // Contructor
    constructor(brand, color){
        this._brand = brand; // Property
        this._color = color; // Property
    }

    //Methods
    displayDetails() {
        console.log(`This car is a ${this._color} from ${this._brand}`)
    }
}

const myCar = new Car("Tata", "Black");

let Cars = new Car("Range Rover", "Black")
myCar.displayDetails();
Cars.displayDetails();

// Example Class and Objects - Bank Account
// Deposits method
// Withdraw method

class Account {

    // Constructor
    constructor(owner, balance) {
        this._owner = owner;
        this._balance = balance;
    }

    // Method for deposit
    deposit (amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`${amount} deposited. New balance: ${this._balance}`);
        }
    }

    // Method for withdraw
    withdraw (amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`${amount} withdrawn. Remainig balance is ${this._balance}`)
        } else {
            console.log("Insufficient balance");
        }
    }

    // Displaying balance
    getBalance() {
        return `Current balance is ${this._balance}`;
    }
}


// Create the object for account class
let myAccount = new Account ("Sanjay", 5000);
let myFrndAcc = new Account ("Ram", 10000);
console.log(myAccount);


myFrndAcc.deposit(200);

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.deposit(1000);