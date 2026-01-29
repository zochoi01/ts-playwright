class TestData {
    static readonly API_URL: string = "https://api.example.com";
}

console.log(TestData.API_URL);

class Config {
    static readonly TIMEOUT: number = 5000;

    static printConfig() {
        console.log(Config.TIMEOUT);
    }
}

Config.printConfig();