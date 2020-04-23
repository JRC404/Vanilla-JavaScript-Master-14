// KP

const accounts = {
    123456: {
        name: "Jacob",
        pin: 1234,
        attempts: 3,
        balance: 2000,
        withdrawalLimit: 250,
        statement: []
    },
    999999: {
        name: "Kerry",
        pin: 9999,
        attempts: 3,
        balance: 10000,
        withdrawalLimit: 250,
        statement: []
    }
};
// ^ accounts list
// code includes withdrawals (with limit and cannot go overdrawn), deposits, pin protection, pin change, transfer, statement with date stamps and a pin lockout
const atm = (id, pin, action, num, transferid) => { // takes arguments of id (account number), pin, transaction type and amount/number(in case of pin change) and transfer id if necessary
    let d = new Date();
    if (accounts[id].pin == pin && accounts[id].attempts > 0) {
        accounts[id].attempts = 3; // resets attempts if pin entered successfully without too many attempts
        console.log(`\n#${id} - Hello, ${accounts[id].name}.\n`);
        if (action == "withdraw" && num <= accounts[id].balance) { // withdrawal
            if (num > accounts[id].balance || accounts[id].withdrawalLimit - num <= 0) {
                console.log(`This amount exceeds your withdrawal limit, cannot complete the transaction.`)
            } else {
                accounts[id].balance -= num;
                accounts[id].withdrawalLimit -= num;
                accounts[id].statement.push(`\n${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   WDL   ￡${num}`)
                console.log(`You have withdrawn £${num}. Your new balance is ￡${accounts[id].balance}.`);
            }
        } else if (action == "deposit") { // deposit
            accounts[id].balance += num;
            accounts[id].statement.push(`\n${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   DEP   ￡${num}`)
            console.log(`You have deposited £${num}. Your new balance is ￡${accounts[id].balance}.`);
        } else if (action == "balance") { // check balance
            console.log(`Your account balance is ￡${accounts[id].balance}.`);
        } else if (action == "transfer") { // balance transfer
            accounts[id].balance -= num;
            accounts[transferid].balance += num;
            accounts[id].statement.push(`\n${d.getDate()}/${d.getMonth()}/${d.getFullYear()}   TFR   ￡${num}`)
            console.log(`You have successfully transferred ￡${num} to account #${transferid}. Your new balance is ￡${accounts[id].balance}.`);
        } else if (action == "pin" && num >= 1000 && num <= 9999) { // change pin
            accounts[id].pin = num;
            console.log(`PIN changed successfully.`);
        } else if (action == "statement") { // statement of transaction history
            console.log(`Showing up to 10 most recent transactions in descending order:\n${accounts[id].statement.slice(0, 9).join('')}`);
        } else { // error
            console.log(`This transaction could not be completed.`);
        }
    } else if (accounts[id].attempts > 1) {
        accounts[id].attempts -= 1; // pin tries decrease
        console.log(`Your account number or pin is incorrect, you have ${accounts[id].attempts} attempt(s) remaining. Please try again or visit us in-store for assistance.`);
    } else {
        accounts[id].attempts = 0; // pin tried too many times
        console.log(`Account locked for security purposes. Please call 0123 444 5678 or visit us in-store for assistance.`);
    }
};
atm(123456, 1234, "withdraw", 300)