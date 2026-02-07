"use strict";
let suite = []; // Mảng chứa danh sách các test case
// Hàm thêm test case mới vào danh sách
// Sử dụng Spread Operator (...) để tạo mảng mới, giữ tính bất biến (immutability)
function addTest(list, test) {
    return [...list, test];
}
// Hàm tìm kiếm test case theo ID
// Trả về TestCase nếu tìm thấy, ngược lại trả về undefined
function findTest(list, id) {
    // Array.find() trả về phần tử đầu tiên thỏa mãn điều kiện
    return list.find(test => test.id === id);
}
// Thêm các test data mẫu vào suite
suite = addTest(suite, { id: 1, title: "Login Test", priority: "High" });
suite = addTest(suite, { id: 2, title: "Search Test", priority: "Low" });
suite = addTest(suite, { id: 3, title: "Checkout Test", priority: "High" });
console.log("All tests:", suite);
// Tìm kiếm test có id = 2
const found = findTest(suite, 2);
console.log("Found test:", found);
