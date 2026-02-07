"use strict";
class BasePage {
    constructor(url) {
        this.url = url;
    }
    navigate() {
        console.log(`Navigating to ${this.url}`);
    }
}
const loginPage = new BasePage("https://example.com/login");
loginPage.navigate();
class UserAccount {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }
    login() {
        console.log(`User ${this.username} is logging in with role ${this.role}`);
    }
}
const userAccount = new UserAccount("Swagger", "Admin");
userAccount.login();
