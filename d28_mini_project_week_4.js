"use strict";
// --- MINI PROJECT WEEK 4: DATA TABLE PROCESSOR ---
/**
 * 3. Hàm Generic xử lý Data Table (Generic function to process data tables)
 * T extends BaseRow: Đảm bảo mọi dòng truyền vào đều phải có thuộc tính 'id'
 * Pick<T, 'id'>: Chỉ lấy ra trường 'id' từ kiểu T để xử lý log.
 */
function processTable(data) {
    console.log(`\n>>> Đang xử lý danh sách gồm ${data.length} dòng...`);
    data.forEach((row, index) => {
        // Sử dụng Pick để trích xuất thông tin quan trọng (thường dùng trong logging)
        // Pick<T, 'id'> creates a type with ONLY the 'id' property from T
        const importantInfo = { id: row.id };
        console.log(`[Dòng ${index + 1}] ID: ${importantInfo.id}`);
        // Trong thực tế Testing, đây có thể là bước:
        // page.locator(`tr#row-${row.id}`).click();
    });
}
// --- THỰC THI (EXECUTION) ---
// Test với bảng User (Testing with User table)
const userTable = [
    { id: 1, name: "Alice", email: "alice@test.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@test.com", role: "User" }
];
// Test với bảng Product (Testing with Product table)
const productTable = [
    { id: 501, title: "Laptop Dell", price: 1500, stock: 10 },
    { id: 502, title: "Mouse Logitech", price: 50, stock: 100 }
];
console.log("--- XỬ LÝ BẢNG TỔNG QUÁT ---");
processTable(userTable);
processTable(productTable);
