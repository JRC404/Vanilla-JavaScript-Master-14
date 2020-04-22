// let firstName = "Jacob"
// let lastName = "Reilly-Cooper"
// let email = "jacob.reilly-cooper@wearecodenation.com"
// let age = 45

// let camelCasing = "best practice"
// let MyPascalVariable = "this"
// let this_is_a_snake_cased_variable = "ugh."
// let MuMoNfAcEbOoK = "Nope."

// let numberOne = 10
// let numberTwo = 5

// numberTwo --
// console.log(numberTwo)

// let favouriteNumber = 4

// console.log(`My favourite number is: ${favouriteNumber} and my other is ${numberTwo}`) // best practice

/* 

variable of password

if it's shorter than 8, say get a longer password
if it's 8 or longer, accept it and print to console

*/

let password = 'password123';

if (password.length < 8) {
  // 0 - 7
  console.log('Too short.');
} else {
  console.log(password);
}

/**
 *
 * Create two variables called number1 and number2.
 * Create an if statement that checks if the result of the sum is whole. If it is return the number, otherwise return the numbers multiplied together.
 *
 */

// put the below inside of function and change the values 5 times

// let numberOne;
// let numberTwo;
// const multiplyNumber = (numberOne, numberTwo) => {
//     let total = numberOne + numberTwo
//     let multiply = numberOne * numberTwo // they don't have values
//     if (total % 2 == 0) {
//         console.log(total)
//     }
//     else {
//         console.log(multiply);
//     }
// }

// multiplyNumber(8, 10)
// multiplyNumber(7, 16)
const myFirstFunction = (num1, num2) => {
  let total = num1 + num2;
  let multiple = num1 * num2;

  if (total % 2 == 0) {
    console.log(total);
  } else {
    console.log(multiple);
  }
}

myFirstFunction(5, 6);
