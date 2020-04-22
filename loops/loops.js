// let string = "Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises."

// let words = string.split(" ")
// console.log(`The large sentence has: ${words.length} words.`);

// let stringTwo = "Hello there. How are you?"

// let newWords = stringTwo.split(" ")
// console.log(`The small sentence has: ${newWords.length} words.`);

// // for (i = 0; i < words.length; i++) {
// //     console.log(i);
// // }

let num = 1000;
let sum = 0;

for (i = 0; i < num; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i; // sum = sum + i
  }
}
console.log(sum);

let newStr =
  'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh';

for (i = 0; newStr.length > i; i++) {
  console.log(newStr[i]);
}

newStr = 'hellohowareyouareyouokaygoodimglad';
for (i = 0; newStr.length > i; i++) {
  console.log(newStr[i]);
}
