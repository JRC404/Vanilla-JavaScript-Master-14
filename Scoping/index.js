// scoping goes here, Jacob.

// let global = true
// console.log(global);

// const randomFunction = () => {
//     let poorChoice = false
//     // console.log(poorChoice)
//     return poorChoice
// }

const firstFunction = () => {
    console.log(secondFunction())
}

const secondFunction = () => {
    let canIAccessThis = false
    // console.log(thirdFunction())
    return canIAccessThis
}
firstFunction() // let's go. The file is ready.

const thirdFunction = () => {
    let butCanThisBeAccessed = true
    return butCanThisBeAccessed
} // useless.

// const myFunction = () => {
//     let a = true
//     return a;
// }

// const myOtherFunction = () => {
//     console.log(myFunction()); // accessed here
// }
// myOtherFunction()

// randomFunction() // false
// randomFunction() // correct or false?