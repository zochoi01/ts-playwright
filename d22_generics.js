"use strict";
/**
 * HỌC VỀ GENERICS TRONG TYPESCRIPT (LEARNING GENERICS IN TYPESCRIPT)
 *
 * Ý tưởng chính: Generics cho phép chúng ta truyền "kiểu dữ liệu" như một tham số.
 * Main Idea: Generics allow us to pass "data types" as parameters.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==========================================
// 1. GENERIC FUNCTIONS (Hàm Generic)
// ==========================================
/**
 * Hàm nhận vào một giá trị kiểu T và trả về chính kiểu T đó.
 * Function takes a value of type T and returns the same type T.
 */
function identify(value) {
    console.log(`Value is: ${value}`);
    return value;
}
// Cách dùng (Usage):
let num = identify(10); // T là number
let str = identify("Playwright"); // T là string
let bol = identify(true); // T là boolean
const userResponse = {
    status: 200,
    message: "Success",
    data: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
};
// Ví dụ: Nhận một con số (Example: Numeric response)
const countResponse = {
    status: 200,
    message: "Total found",
    data: 100
};
console.log(userResponse);
console.log(countResponse);
// ==========================================
// 3. GENERIC CLASSES (Lớp Generic)
// ==========================================
/**
 * Lớp quản lý kho lưu trữ đồ vật.
 * Class to manage an item repository.
 */
class Repository {
    constructor() {
        this.items = [];
    }
    // Thêm một item kiểu T vào mảng
    addItem(item) {
        this.items.push(item);
    }
    // Lấy item cuối cùng
    getLastItem() {
        return this.items[this.items.length - 1];
    }
}
// Sử dụng cho danh sách chuỗi (Usage for strings)
const stringRepo = new Repository();
stringRepo.addItem("Node.js");
stringRepo.addItem("TypeScript");
console.log(stringRepo.getLastItem()); // "TypeScript"
function logWithLength(arg) {
    console.log(`Content: ${arg}, Length: ${arg.length}`);
    return arg;
}
logWithLength("Hello World"); // OK: vì string có thuộc tính length
logWithLength([1, 2, 3]); // OK: vì array có thuộc tính length
// logWithLength(10);         // ERROR: vì number không có length
