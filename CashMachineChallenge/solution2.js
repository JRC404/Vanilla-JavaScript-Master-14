// HM

let accNum = [1111];
let accPin = [1111];

const acceptAcc = (account) => {
    if (account == accNum[0]) {
        AccCorrect = true;
    }
    else {
        AccCorrect = false;
    }
    return AccCorrect;
}
const acceptPin = (pin) => {
    if (pin == accPin[0]) {
        PinCorrect = true;
    }
    else {
        PinCorrect = false;
    }
    return PinCorrect;
}

acceptAcc(1111);
acceptPin(1111);

if (AccCorrect == true) {
    if (PinCorrect == true) {
        console.log("Access Granted.")
    }
    else {
        console.log("Pin Incorrect.")
    }
}
else {
    console.log("Account Number not recognised.");
}