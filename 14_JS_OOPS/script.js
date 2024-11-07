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


// A library contains books, where each book has specific 
// properties like title, author, and genre and methods we borrowing and returning.

class Book {
    // Constructor
    constructor(title, author, genre) {
        this._titile = title;
        this._author = author;
        this._genre = genre;
        this._isAvailable = true; // All books start as available
    }


    // Methods
    borrow() {
        if (this._isAvailable) {
            this._isAvailable = false;
            console.log(`You have borrowed ${this._titile}`);
        } else {
            console.log(`Sorry, ${this._titile} is currently not available in library`)
        }
    }

    // Return Method:
    returnBook() {
        this._isAvailable = true;
        console.log(`You have returened ${this._titile}`);
    }


}

class library {
    // constructors
    constructor(name) {
        this._name = name;
        this.books = [];
    }

    // Methods
    addBooks(book) {
        this.books.push(book) // this = library, books = constructor, push = is a method to push the element in arry, (book) - parameter for addBook
    }

    // List all available books
    listAvailableBooks() {
        console.log("Avaiable books in the library");
        this.books.forEach(book => {
            if (book._isAvailable) {
                console.log(` - ${book._titile} by ${book._author}`)
            }
        });
    }

}


// We will create a objects using Library and Book Classes

let myLibrary = new library("Sanjay Library");
console.log(myLibrary);

let book1 = new Book("Start to Right", "Indraveer Sigh", "Startup");
let book2 = new Book("Deep Work", "Cal Newport", "Consistence");

myLibrary.addBooks(book1);
myLibrary.addBooks(book2);


myLibrary.listAvailableBooks(); 

book1.borrow();

myLibrary.listAvailableBooks(); 

book1.returnBook();

myLibrary.listAvailableBooks(); 



// ---------------- Minimizing Redundancy using Inheritance (OOPS) ----------------

// Gername Employee class - Parent
class Employee {
    // constructore
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    // Method - Raise the salary for the employee
    raiseSalary (amount) {
        this._salary += amount
        console.log(`${this._name} new salary is ${this._salary}.`);
    }

    // Method - detail of employee
    detail() {
        console.log(`Employee: ${this._name}, Salary: ${this._salary}`);
    }

}

// Child Classes - FullTimeEmployee, PartTimeEmployee, Contractor

class FullTimeEmployee extends Employee {
    constructor(name, salary, benefits) {
        super(name, salary);
        this._benefits = benefits;
    }

    // Method for Fulltime Benefits
    showBenefits() {
        console.log(`${this._name} has benefits: ${this._benefits}.`);
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, salary, hoursPerWeek) {
        super(name, salary);
        this._hoursPerWeek = hoursPerWeek;
    };


    // Method - specific to partTimeEmployee
    showWorkingHours () {
        console.log(`${this._name} works ${this._hoursPerWeek} hours per week.`);
    }
}



class Contractor extends Employee {
    constructor(name, salary, contractLength) {
        super(name, salary);
        this._contractLength = contractLength;
    };


    // Method - specific to partTimeEmployee
    contractLength () {
        console.log(`${this._name} has a contract length of ${this._contractLength} months.`);
    }
}


// objects

let fullTimeEmp = new FullTimeEmployee('Sanjay', 10000, "Health Insurance, PF, Stocks etc");
fullTimeEmp.detail();
fullTimeEmp.showBenefits();

let partTimeEmp = new PartTimeEmployee("Ram", 6000, 20);
partTimeEmp.detail();
partTimeEmp.showWorkingHours();

let contractor = new Contractor("Rana", 3000, 5);
contractor.detail();
contractor.contractLength()

