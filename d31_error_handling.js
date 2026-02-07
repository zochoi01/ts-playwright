"use strict";
/**
 * Hàm giả lập lấy thông tin người dùng (Simulated fetch user function)
 * @param id ID của người dùng
 */
async function fetchUser(id) {
    console.log(`\n--- Đang tìm kiếm user với ID: ${id} ---`);
    // Giả lập độ trễ mạng (Simulate network delay)
    await new Promise(res => setTimeout(res, 1000));
    if (id < 0) {
        // 1. Ném lỗi nếu ID không hợp lệ (Throw error if ID is invalid)
        throw new Error(`ID ${id} không hợp lệ! ID phải là số dương. (Invalid ID! ID must be positive.)`);
    }
    return `Tìm thấy người dùng ID: ${id} (User found with ID: ${id})`;
}
/**
 * Hàm thực thi để kiểm tra việc xử lý lỗi (Execution function to test error handling)
 */
async function runErrorHandlingTest() {
    console.log("KHỞI ĐỘNG KIỂM TRA LỖI (STARTING ERROR HANDLING TEST)");
    // TRƯỜNG HỢP 1: ID đúng (Case 1: Correct ID)
    try {
        const user = await fetchUser(10);
        console.log("Kết quả (Result):", user);
    }
    catch (error) {
        console.error("Phát hiện lỗi (Error detected):", error.message);
    }
    // TRƯỜNG HỢP 2: ID âm - Gây lỗi (Case 2: Negative ID - Causes Error)
    try {
        const user = await fetchUser(-5);
        // Dòng này sẽ không bao giờ chạy nếu có lỗi ở trên
        console.log("Kết quả (Result):", user);
    }
    catch (error) {
        // 2. catch sẽ bắt được lỗi throw từ hàm fetchUser
        console.error("Phát hiện lỗi (Error detected):", error.message);
    }
    finally {
        // 3. Khối finally luôn chạy (Finally block always runs)
        console.log(">>> Hoàn thành quy trình kiểm tra (Inspection process finished)");
    }
}
// Chạy demo (Run demo)
runErrorHandlingTest();
