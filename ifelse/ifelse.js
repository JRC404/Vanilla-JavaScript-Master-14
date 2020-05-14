let age = 45;

if (age < 18) {
  console.log("You can't come in.");
} else if (age < 65) {
  console.log('You pay full price.');
} else {
  console.log('10% discount for you.');
}

let favouriteColour = 'Orange';

if (favouriteColour == 'Orange') {
  console.log('Well done, Jacob. Great choice, pal.');
} else if (favouriteColour == 'Purple') {
  console.log("It's not orange though, is it?");
} else if (favouriteColour == 'Red') {
  console.log("It's not orange though, is it? ");
} else if (favouriteColour == 'Yellow') {
  console.log("It's not orange though, is it?");
} else if (favouriteColour == 'Pink') {
  console.log("It's not orange though, is it?");
} else {
  console.log("That's not a colour I know.");
}

if (favouriteColour == pink)
  // if (favouriteColour == (whatever value is after case))

  switch (favouriteColour) {
    case 'Orange':
      console.log('Good choice.'); // if favouriteColour == orange
      break;
    case 'Purple': // if favouriteColour == purple
    case 'Blue': // if favouriteColour == blue
    case 'Yellow': // if favouriteColour == yello
    case 'Red': // if favouriteColour == red
    case 'Pink': // if favouriteColour == pink
      console.log("It's not orange though.");
      break;
    default:
      console.log("That's not a colour I know.");
      break;
  }

let grade = 'a';

switch (grade.toUpperCase()) {
  case 'A':
    console.log('Congratulations. Here is a medal.');
    break;
  case 'B':
    console.log('Well done, nick that medal above.');
    break;
  case 'C':
    console.log('Superb!');
    break;
  case 'D':
  case 'E':
  case 'F':
  case 'U':
    console.log("You tried your best, but you didn't succeed.");
    break;
  default:
    console.log('Great attempt at entering a grade there.');
    break;
}
