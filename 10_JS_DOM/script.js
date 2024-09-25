// What is the useful of JS DOM

/* 
    1. JS can change all HTML ele in the page
    2. JS can change all the HTML attributes in the page
    3. JS can change all the CSS styles in the page
    4. JS can remove existing HTML elements and attributes
    5. JS can add new HTML elem and attri
    6. JS can react to all HTML events in the page
    7. JS can create new HTML events in the page
*/

// What is DOM - The DOM is a platform and langauge interface that will allow programs and scripts to dynamically access & update the content, structure and style of the document.
/* 
    DOM Standards is categorized into 3 different parts
    1. Core DOM - Standard model for all document types
    2. XML DOM -  ""      ""    for XML documents
    2. HTML DOM -  ""      ""    for HTML documents
*/

// What is HTML DOM: The DOM is a standard object model and programming interface for the HTML. 
// The HTML DOM is a standard for how to get, change, add, or delete HTML elements

function celToFahren(cel) {
    let Fahrenheit = (cel * 9/5) + 32;
    return Fahrenheit;
}


let tempInCel = 100;
let tempInFahren = celToFahren(tempInCel);

console.log(tempInFahren);




let sentence = document.getElementById('demoDOM').innerHTML = tempInFahren;


// Finding HTML Elements:
// 1. document.getElementById('id')
// 2. document.getElementsByTagName('tagName')
// 3. document.getElementByClassName('class')
// 4. document.document.querySelector(".myclass");

//Changing HTML Elements:
// 1. element.innerHTML = new html content
// 2. element.setAttribute = new value
// 3. element.style.property = new style
// 4. element.setAttribute(attribute, value)

// elem.hasAttribute(name) – checks for existence.
// elem.getAttribute(name) – gets the value.
// elem.setAttribute(name, value) – sets the value.
// elem.removeAttribute(name) – removes the attribute.

// Adding and Deleting Elements
// 1. document.createElement(elmentName)
// 2. document.removeChild(elementName)
// 3. document.appendChild(elementName)
// 4. document.replaceChild(new, old)
// 5. document.write(text)


// Finding Elements:
let h2 = document.getElementById('demoH2');
console.log(h2);

//Adding value to the element
h2.innerHTML = "Learning JS DOM";


// Adding Image using DOM
let myImg = document.getElementById('myImg');
console.log(myImg);

// Adding image url
myImg.src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";



// ================= Selecting elements using tagname =================

let allP = document.getElementsByTagName('p');
console.log(allP);

allP[0].innerHTML = "Learning JS DOM";
allP[0].style.backgroundColor = "red";

// for (let i = 0; i < allP.length; i++) {
//     allP[i].innerHTML = "Learning JS DOM";
//     allP[i].style.backgroundColor = "yellow";
// }


// ================== Selecting elements using ClassName ===============

let classText = document.getElementsByClassName('classH2');
console.log(classText);

classText[0].innerHTML = "Selecting the class name"


// =================== querySelector(".myclass") =================
// id = #, class = ., tag = tagname

let querySel = document.querySelector("#demoH3");
console.log(querySel);

querySel.innerHTML = "Query Selector";


// ================= element.setAttribute = new value =================

let mybox = document.getElementById('box');
mybox.setAttribute('style', 'width: 300px; height: 300px; background: green;')


let img = document.getElementById('setAtt');
img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
img.setAttribute('width', '80px');
img.setAttribute('style', 'background: red; padding: 20px; border-radius: 8px')


// ================== element.style.property = new style =======================

let btn = document.getElementById('submit-btn');

btn.onmouseover = function() {
    btn.style.backgroundColor= "red";
}

btn.onmouseout = function() {
    btn.style.backgroundColor= "initial";
}