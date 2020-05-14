// hopefully?

/**
 * what do we need?
 * 
 * what are the rules?
 * roll a 1, you die. 
 * score 21 or more and you live.
 * 
 * then you can hold? Is that vital to the game? Absolutely no. Not even near the end.
 * 
 */

const number = document.getElementById('number');
const roll = document.getElementById('roll');

roll.addEventListener('click', () => {
    let numberRolled = 4
    let playerScore = 22
    if (numberRolled == 1) {
        console.log('game over.');
        numberRolled = 0; // is this necessary? prolly not.
        playerScore = 0;
    }
    else if (playerScore >= 21) {
        console.log('you win, man. Well done, I guess.');
        playerScore = 0
    }
    else {
        playerScore += numberRolled;
        console.log(`You are on ${playerScore}. Keep going.`);
    }
})

// const rollDice = (numberRolled, playerScore) => {
//     // let numberRolled = 1;
//     // let playerScore = 19;
//     if (numberRolled == 1) {
//         console.log('game over.');
//         numberRolled = 0; // is this necessary? prolly not.
//         playerScore = 0;
//     }
//     else if (playerScore >= 21) {
//         console.log('you win, man. Well done, I guess.');
//         playerScore = 0
//     }
//     else {
//         playerScore += numberRolled;
//         console.log(`You are on ${playerScore}. Keep going.`);
//     }
// }

// rollDice(6, 23)
// rollDice(1, 23)
// rollDice(4, 17)