// const functionOfSomeSort = (bankBalance) => {
//     let withdrawAmount = 250
//     bankBalance -= withdrawAmount
//     // console.log(bankBalance)
//     return bankBalance
// }

// let userBalance = functionOfSomeSort(250)

// console.log(userBalance);

// let attempts = 0
// let pinNumber = 1234
// let userInput = 1235

// const pinCheck = () => {
//     // while (attempts <= 3) {
//     if (userInput != pinNumber) {
//         console.log(attempts);
//         attempts++
//     }
// }


// while (attempts != 3) {
//     pinCheck()
// }
let machineOptions;
let newPin;

const options = (pin) => {
    pin = prompt('Please enter pin')
    pinCounter=0
    if (pin == '9999') {
        alert('correct pin')
        machineOptions = prompt('Choose one of the following options. 1.Change pin 2.View account 3.View transactions 4.Withdraw Cash 5.Change language 6.Deposit Cash.')
        if (machineOptions == 'Change pin'){
            changePin()
        }
    }
}

const changePin = () => {
    newPin = prompt('Please enter new pin')
    validatePin = prompt('Please enter it again')
    if (newPin == validatePin) {
        alert('Your pin has changed')
    }
    else {
        changePin()
    }
}


options(9999)