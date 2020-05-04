// alert("Did this work?")

/**
 * 
 * Select different elements and control what we want them to do
 * Change the paragraph to a different colour... 
 * We can do that with CSS... or JS.
 * 
 * Manipulate the elements and then display it... 
 * 
 */

// document.getElementById("heading").style.color = "purple";
// document.getElementById("heading").style.backgroundColor = "pink";

const myFirstHeading = document.getElementById("heading");
const button = document.getElementById("button");
const input = document.getElementById("input");
const paragraphs = document.getElementsByTagName("p"); // array

paragraphs[0].style.color = "red";
// charmaine has said a loop... 
// FOR arguments sake... if we were to use a loop...


myFirstHeading.addEventListener("click", () => {
    myFirstHeading.style.color = "green";
})

button.addEventListener("click", () => {
    // myFirstHeading.style.color = "yellow";
    myFirstHeading.style.color = input.value;
    
})



/**
 * three variables being created... so we can target them
 * button that when clicked modifies the heading based on the input box value
 */