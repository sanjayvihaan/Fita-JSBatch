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