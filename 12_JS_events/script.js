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


// On mouse over and mouse out events

btn.onmouseover = function() {
    btn.style.backgroundColor = 'green';
}

btn.onmouseout = function() {
    btn.style.backgroundColor = 'white';
}


let key = document.getElementById('input');

key.onkeydown = function(event) {
    if (event.key === 'Escape') {
        alert("You have click close button")
    }
    console.log('Key pressed: ', event.key);

}

window.onload = function() {
    console.log('Window loaded/page loaded')
}