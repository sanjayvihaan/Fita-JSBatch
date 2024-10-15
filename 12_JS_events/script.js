let fruits = document.getElementById('selectFruit');
let displayFruit = document.getElementById('displayFruit');

let name = document.getElementById('name');
let userName = document.getElementById('userName');

let btn = document.getElementById('onClick');

fruits.onchange = function() {
    displayFruit.innerText = this.value;
}

// fruits.addEventListener('change', function() {
//     displayFruit.innerText = this.value;
// })


btn.onclick = function() {
    let selectFruit = fruits.value;
    displayFruit.innerText = selectFruit;


    let username = name.value;
    userName.innerText = username;
}