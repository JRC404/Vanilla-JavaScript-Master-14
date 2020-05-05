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
const smallerHeading = document.getElementsByClassName("smallerHeading");
// const evenSmallerHeading = document.getElementsByTagName()
// const list = document.getElementsByTagName("li")
const list = document.querySelector("li");
// for (i = 0; i < list.length; i++) {
//     list[i].style.color = "red";
// }

list.style.color = "red";


// paragraphs[0].style.color = "blue";
// charmaine has said a loop... 
// FOR arguments sake... if we were to use a loop...

// loop through the elements... 
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

paragraphs[0].style.color = "yellow";

// change all the elements with the className smallerHeading... to any color you want - ARRAY... let's get all of the elements.

for (let i = 0; i < smallerHeading.length; i++) {
    smallerHeading[i].style.color = "pink";
}

document.getElementsByClassName('smallerHeading')[0].style.color='red'
smallerHeading[1].style.color='green'





myFirstHeading.addEventListener("click", () => {
    myFirstHeading.style.color = "green";
})

button.addEventListener("click", () => {
    // myFirstHeading.style.color = "yellow";
    myFirstHeading.style.color = input.value;
    // smallerHeading[0].style.color = input.value;
    // console.log(input.value);
})



/**
 * three variables being created... so we can target them
 * button that when clicked modifies the heading based on the input box value
 */