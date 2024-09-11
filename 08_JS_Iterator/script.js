let names = ["Ram", "Rana", "John", "Prasad"];

for (let personName of names) {
    console.log(`The name of person is ${personName}`);

    // Getting an Iterator for the charater in the Person's name
    let charIterator = personName[Symbol.iterator](); 


    while(true) {
        let charater = charIterator.next() // Get the next Charater
        if(charater.done) { // If there is no more character is exists.
            break;
        }
        console.log(`${charater.value}`) // Printing the charater one by one
    }
}


let text = "learning";

console.log(text);

for (let word of text) {
    console.log(word);
}



let arrays = ["ab", "bc", "cd"];

console.log(arrays);


for (let wod of arrays) {
    console.log(wod);
}