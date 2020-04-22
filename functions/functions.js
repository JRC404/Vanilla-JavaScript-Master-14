/**
 * functions - allow us to reuse code
 *
 */

let kettleBoiled;

// const makeDrinkOfVimto = (kettleBoiled) => {
//   // declaration of function. arrow function - ES6 syntax
//   if (kettleBoiled) {
//     console.log("Pour the drink then... I'm waiting.");
//     kettleBoiled = false;
//   }
//   else {
//     kettleBoiled = true;
//     console.log("You expect me to drink cold vimto? Boil it then.");
//   }
// };

// makeDrinkOfVimto()

// let num;
// const threeOrFive = (num) => {
//   let sum = 0;
//   for (i = 0; i < num; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i; // sum = sum + i
//     }
//   }
//   console.log(sum);
// }

// threeOrFive(500);
// threeOrFive(250);

// withdraw, deposit, check pin, change pin, take cheques, emergency cash, display balance, change currency, find a husband / wife

const withdrawl = (withdrawlAmount, accountNumber) => {

  console.log(`Withdrawing ${withdrawlAmount} from ${accountNumber}`);
  // we need a bankBalance (something to withdraw from...)... if there is enough money in the account...
}

withdrawl(123456, 500)

