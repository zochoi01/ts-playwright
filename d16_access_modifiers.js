"use strict";
class Computer {
    constructor() {
        this.passcode = 1234;
        this.brand = "MSI";
        this.brand = "MSI";
    }
}
console.log(new Computer().brand);
class BankAccount {
    constructor() {
        this.balance = 1000;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
const bankAccount = new BankAccount();
bankAccount.deposit(1000);
console.log(bankAccount.getBalance());
// Thử truy cập trực tiếp vào thuộc tính private sẽ gây lỗi
// Try accessing private property directly will cause an error
// console.log(bankAccount.balance); // Property 'balance' is private and only accessible within class 'BankAccount'.
