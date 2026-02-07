"use strict";
function greet(name, title = "Mr/Ms", message) {
    return `Hello ${title} ${name}. ${message || ""}`;
}
// function greet(name: string, title: string = "Mr/Ms", message: string = ""): string {
//     return `Hello ${title} ${name}. ${message}`;
// }
console.log(greet("John"));
console.log(greet("John", "Dr."));
console.log(greet("John", "Dr.", "How are you?"));
function takeScreenshot(fileName, format = "png", isFullPage) {
    return `Saving screenshot as ${fileName}.${format}, FullPage: ${isFullPage}`;
}
console.log(takeScreenshot("login"));
console.log(takeScreenshot("login", "jpeg"));
console.log(takeScreenshot("login", "jpeg", undefined));
console.log(takeScreenshot("login", "jpeg", true));
console.log(takeScreenshot("login", undefined, false));
