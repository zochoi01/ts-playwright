"use strict";
let scores = [10, 20, 30];
let cities = ["New York", "Los Angeles", "Chicago"];
// console.log(scores);
// console.log(cities);
let userRow = [1, "John", true];
userRow[0] = scores[0];
userRow[1] = cities[1];
userRow[2] = false;
// console.log(userRow);
// console.log(userRow[0]);
// console.log(userRow[1]);
// console.log(userRow[2]);
let browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera"];
console.log(browsers);
// console.log(browsers[0]);
// console.log(browsers[1]);
// console.log(browsers[2]);
// console.log(browsers[3]);
// console.log(browsers[4]);
let account = ["acc1", "pass1"];
console.log(account);
// console.log(account[0]);
// console.log(account[1]);
// --- PHẦN BỔ SUNG (ADDITIONAL SECTION) ---
// 3. Mảng với nhiều kiểu dữ liệu (Arrays with Union Types)
// Cho phép mảng chứa cả số và chuỗi
// Allows array to contain both numbers and strings
let mixed = [1, "two", 3, "four"];
console.log("Mixed Array:", mixed);
// 4. Mảng chỉ đọc (Readonly Arrays)
// Ngăn chặn việc sửa đổi mảng sau khi khởi tạo
// Prevents modifying the array after initialization
let readonlyNumbers = [100, 200, 300];
// readonlyNumbers.push(400); // Lỗi: Không thể thay đổi mảng Readonly / Error: Cannot modify Readonly array
console.log("Readonly Array:", readonlyNumbers);
// 5. Tuple với phần tử tùy chọn (Tuple with Optional Elements)
// Phần tử thứ 3 có dấu '?' là không bắt buộc
// The 3rd element with '?' is optional
let optionalTuple = [10, "Optional"];
optionalTuple = [10, "Optional", true];
optionalTuple = [20, "Optional", false];
console.log("Optional Tuple:", optionalTuple);
// 6. Phân tách Tuple (Tuple Destructuring)
// Lấy giá trị từ tuple gán vào các biến riêng lẻ
// Extracting values from a tuple into individual variables
let [empId, empName, isActive] = userRow;
console.log(`De-structured: ID=${empId}, Name=${empName}, Active=${isActive}`);
// 7. Tuple chỉ đọc (Readonly Tuples)
// Ngăn chặn việc thay đổi giá trị của các phần tử bên trong
// Prevents changing the values of elements inside
let readonlyTuple = ["Version", 1];
// readonlyTuple[1] = 2; // Lỗi: Thuộc tính chỉ đọc / Error: Read-only property
console.log("Readonly Tuple:", readonlyTuple);
