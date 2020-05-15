const listItemId = document.getElementById("listItemId");
const listItemClass = document.getElementsByClassName("listItemClass");
const button = document.getElementById("button");
const input = document.getElementById("input");
const form = document.getElementById("form");
const wrapper = document.getElementById("wrapper");
// id = single element selection
// class = multiple element selection through an array

// listItemId.style.color = "red";
document.getElementById("listItemId").style.color = "blue";
// listItemClass[1].style.color = "red";

// for (let i = 0; i < listItemClass.length; i++) {
//     listItemClass[i].style.color = "yellow";
// }

let counter = 0;
// button.addEventListener('click', () => {
//     if (counter < 5) {
//         listItemId.textContent = "Seriously, child... please?"
//     }
//     else {
//         listItemId.textContent = "Seriously, child... you're getting on my nerves?"
//     }
//     counter++
// })

// button.onclick = () => {
//     // if (counter < 4) {
//     //     listItemId.textContent = "Seriously, child... please?"
//     // }
//     // else {
//     //     listItemId.textContent = "Seriously, child... you're getting on my nerves?"
//     // }
//     // counter++
//     console.log(input.value)
// }

// form.onsubmit = () => {
//     event.preventDefault();
//     console.log(input.value);
//     addParagraphs()
// }

button.onclick = () => {
    addParagraphs()
}

const addParagraphs = () => {
    let paragraphsForAdam = parseInt(input.value);

    // let boxes = parseInt(input.value);
    for (i = 0; i < paragraphsForAdam; i++) {
        // let box = document.createElement("img");
        let paragraph = document.createElement("p");
        paragraph.textContent = "Game over";
        wrapper.appendChild(paragraph)
    }
}
