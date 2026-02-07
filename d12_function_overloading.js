"use strict";
function double(input) {
    return input + input;
}
console.log(double(10));
console.log(double("Hello"));
function getLocator(idOrPrefix, name) {
    if (typeof idOrPrefix === "string" && name != undefined) {
        return `[${idOrPrefix}]-[${name}]`;
    }
    return `#id-[${idOrPrefix}]`;
}
console.log(getLocator(10));
console.log(getLocator("username", "login"));
