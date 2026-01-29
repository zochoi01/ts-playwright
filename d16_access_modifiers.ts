class Computer {
    private passcode: number = 1234;
    public brand: string = "MSI";

    constructor() {
        this.brand = "MSI";
    }
}
console.log(new Computer().brand);

class BankAccount {
    private balance: number = 1000;

    public deposit(amount: number) {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const bankAccount = new BankAccount();
bankAccount.deposit(1000);
console.log(bankAccount.getBalance());

// Thử truy cập trực tiếp vào thuộc tính private sẽ gây lỗi
// Try accessing private property directly will cause an error
// console.log(bankAccount.balance); // Property 'balance' is private and only accessible within class 'BankAccount'.

