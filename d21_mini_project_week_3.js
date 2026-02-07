"use strict";
class BasePage1 {
    constructor(url) {
        this.url = url;
    }
    goto() {
        console.log(`Navigating to ${this.url}`);
    }
}
class LoginPage1 extends BasePage1 {
    constructor() {
        super("https://example.com/login");
        this.loginBtn = "#login";
    }
    login() {
        console.log("Logging in when clicking on login button ", this.loginBtn);
    }
    logout() {
        console.log("Logging out");
    }
}
const loginPage1 = new LoginPage1();
loginPage1.goto();
loginPage1.login();
loginPage1.logout();
