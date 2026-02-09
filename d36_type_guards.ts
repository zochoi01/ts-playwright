function printIdandNumber(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // TS biết chắc chắn đây là string
    } else {
        console.log(id.toFixed(2));    // TS biết chắc chắn đây là number
    }
}

printIdandNumber(123)
printIdandNumber("Hello")

function printStringAndArray(value: string | string[]) {
    if (Array.isArray(value)) {
        for (const item of value) {
            console.log(item)
        }
    } else {
        console.log(value)
    }
}

printStringAndArray("Hello, this is a string")
printStringAndArray(["This", "is", "a", "array"])