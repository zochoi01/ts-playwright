"use strict";
class TestData {
}
TestData.API_URL = "https://api.example.com";
console.log(TestData.API_URL);
class Config {
    static printConfig() {
        console.log(Config.TIMEOUT);
    }
}
Config.TIMEOUT = 5000;
Config.printConfig();
