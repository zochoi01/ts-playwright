"use strict";
/**
 * HỌC VỀ UTILITY TYPES: PICK & OMIT
 * (LEARNING UTILITY TYPES: PICK & OMIT)
 */
Object.defineProperty(exports, "__esModule", { value: true });
const contact = {
    username: "antigravity",
    email: "ai@deepmind.com"
    // age: 25 // LỖI: Vì Pick không chọn 'age'
};
console.log("--- Ví dụ Pick (Chỉ lấy Username & Email) ---");
console.log(contact);
const publicUser = {
    id: "U001",
    username: "tester1",
    email: "test@gmail.com",
    age: 30,
    address: "District 1, HCM",
    role: "user",
    createdAt: new Date()
    // password: "123" // LỖI: Vì 'password' đã bị Omit (loại bỏ)
};
console.log("\n--- Ví dụ Omit (Loại bỏ Password để bảo mật) ---");
console.log(publicUser);
// Tình huống: Hàm chỉ quan tâm đến việc chụp ảnh màn hình hay không.
function takeScreenshot(config) {
    if (config.screenshot) {
        console.log("--- Đang chụp ảnh màn hình... ---");
    }
}
// Tình huống: Hàm chạy test mặc định, không cần quan tâm headless hay không.
function runBasicTest(config) {
    console.log(`Đang chạy test tại: ${config.url} với timeout ${config.timeout}`);
}
takeScreenshot({ screenshot: true });
runBasicTest({ url: "https://google.com", timeout: 5000, screenshot: false });
/**
 * TÓM TẮT DỄ NHỚ (EASY SUMMARY)
 * ----------------------------
 * 1. Pick = Select (Chọn lọc). Dùng khi bạn chỉ muốn "vài người" trong một đám đông.
 * 2. Omit = Remove (Loại bỏ). Dùng khi bạn muốn "tất cả" trừ một vài người "cá biệt".
 *
 * Quy tắc ngón tay cái:
 * - Nếu danh sách các trường bạn muốn lấy LÀ ÍT -> Dùng Pick.
 * - Nếu danh sách các trường bạn muốn bỏ LÀ ÍT -> Dùng Omit.
 */
