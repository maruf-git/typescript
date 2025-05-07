"use strict";
function add(num1, num2 = 10) {
    return num1 + num2;
}
console.log(add(2, 3));
const addition = (num1, num2) => num1 + num2;
console.log(addition(2, 3));
const user2 = {
    firstName: "maruf",
    middleName: "Ur Rahman",
    lastName: "munna",
    balance: 0,
    addBalance(amount) {
        return this.balance += amount;
    }
};
