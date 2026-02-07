"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function logMessage(message) {
    console.log(`Message: ${message}`);
}
logMessage("Hello Swagger");
function calculateRetryTime(attempt) {
    return attempt * 2;
}
console.log(calculateRetryTime(3));
