// JM

let pinCount = 0
const pinblock = (pinCount = undefined) => {
    if (pinCount < 3) {
        block = false;
    }
    else {
        block = true;
        console.log("You exceeded the number of attemps. Goodbye now.");
    }
}
const checkPin = (pin = 1334) => {
    if (pin != 1234) {
        console.log("Wrong PIN. Try again");
        pinblock(pinCount++);
        // checkPin();
    }
    else {
        console.log("Welcome to the Iron Bank");
    }
}
checkPin(1233); // prompts to sat what's your pin?
checkPin(1233);
checkPin(1233);
checkPin(1233);