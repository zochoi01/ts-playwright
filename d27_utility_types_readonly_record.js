"use strict";
/**
 * HỌC VỀ UTILITY TYPES: RECORD & READONLY
 * (LEARNING UTILITY TYPES: RECORD & READONLY)
 */
Object.defineProperty(exports, "__esModule", { value: true });
// =================================================================
// 1. RECORD<K, T> - "DANH SÁCH KHÓA & GIÁ TRỊ"
// =================================================================
/**
 * Record<K, T> giúp định nghĩa một đối tượng với các Key thuộc kiểu K
 * và các Value thuộc kiểu T.
 */
// Ví dụ: Quản lý các mã lỗi (Error Codes)
// Key là số (number), Value là tin nhắn (string)
const statusMessages = {
    200: "OK",
    404: "Not Found",
    500: "Internal Server Error"
};
console.log("--- Ví dụ Record (Status Messages) ---");
console.log(statusMessages[404]); // "Not Found"
// Key phải là các tên trong PageLocators, Value phải là string
const loginPage = {
    loginBtn: "button#login",
    usernameInput: "input[name='user']"
};
// Tạo một đối tượng cấu hình và khóa nó lại bằng Readonly
const systemConfig = {
    apiKey: "SECRET_123",
    timeout: 5000
};
// --- Thao tác ---
console.log("\n--- Ví dụ Readonly ---");
console.log(`API Key hiện tại: ${systemConfig.apiKey}`);
/**
 * THỬ NGHIỆM GÂY LỖI (ERROR TEST):
 * Nếu bạn bỏ comment dòng dưới đây, TypeScript sẽ báo lỗi ngay lập tức
 * vì không được phép sửa đổi thuộc tính của Readonly.
 */
// systemConfig.timeout = 10000; // LỖI: Cannot assign to 'timeout' because it is a read-only property.
// =================================================================
// 3. KẾT HỢP: READONLY + RECORD (THE ULTIMATE PROTECTION)
// =================================================================
// Đây là cách bảo mật dữ liệu tuyệt đối cho các hằng số (Constants)
const ENV_URLS = {
    dev: "https://dev.com",
    prod: "https://prod.com"
};
// ENV_URLS.dev = "hack-url.com"; // LỖI: Bị khóa chặt cả cấu trúc Record lẫn tính chất Readonly
/**
 * TÓM TẮT DỄ HIỂU (EASY SUMMARY)
 * ----------------------------
 * 1. Record: Dùng để tạo ra các "từ điển" (Dictionary) có quy tắc rõ ràng cho Key và Value.
 * 2. Readonly: Dùng để đóng băng (Freeze) đối tượng, ngăn chặn các thay đổi ngoài ý muốn trong quá trình chạy code.
 */ 
