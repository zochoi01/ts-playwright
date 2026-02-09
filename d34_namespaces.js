"use strict";
/**
 * [VN] Ngày 34: Tìm hiểu về TypeScript Namespaces
 * [EN] Day 34: Understanding TypeScript Namespaces
 */
/**
 * [VN] Namespace 'Validation' giúp gom nhóm các hàm kiểm tra dữ liệu.
 * [EN] Namespace 'Validation' groups data validation functions.
 */
var Validation;
(function (Validation) {
    /**
     * [VN] Phải có 'export' thì bên ngoài mới gọi được Validation.checkEmail()
     * [EN] Must have 'export' for external access as Validation.checkEmail()
     */
    function checkEmail(email) {
        console.log(`[Validation Log] Checking: ${email}`);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    Validation.checkEmail = checkEmail;
})(Validation || (Validation = {}));
// --- SỬ DỤNG ---
// --- USAGE ---
const mail1 = "antigravity@google.com";
const mail2 = "invalid_user_name";
console.log("--- Testing Namespaces ---");
// [VN] Truy cập hàm thông qua tên Namespace
// [EN] Access the function via the Namespace name
const result1 = Validation.checkEmail(mail1);
const result2 = Validation.checkEmail(mail2);
console.log(`Result 1 (${mail1}): ${result1}`); // Expected: true
console.log(`Result 2 (${mail2}): ${result2}`); // Expected: false
