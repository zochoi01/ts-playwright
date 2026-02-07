export { }
// ============================================
// LET, CONST, và TYPE ANNOTATIONS
// LET, CONST, and TYPE ANNOTATIONS
// ============================================

// ============================================
// 1. LET - Biến có thể thay đổi / Mutable Variable
// ============================================

// Khai báo với let - giá trị CÓ THỂ thay đổi
let age: number = 25;
console.log("Initial age:", age); // 25

age = 30; // ✅ OK - có thể gán lại giá trị mới
console.log("Updated age:", age); // 30

// age = "thirty"; // ❌ Error! Không thể gán string cho number type

// Block scope - let chỉ tồn tại trong block {}
{
    let blockVariable: string = "I'm inside a block";
    console.log(blockVariable); // ✅ OK
}
// console.log(blockVariable); // ❌ Error! Không tồn tại ngoài block

// ============================================
// 2. CONST - Hằng số không thay đổi / Immutable Constant
// ============================================

// Khai báo với const - giá trị KHÔNG THỂ thay đổi
const PI: number = 3.14159;
console.log("PI:", PI);

// PI = 3.14; // ❌ Error! Cannot assign to 'PI' because it is a constant

const userName: string = "John Doe";
// userName = "Jane"; // ❌ Error! Không thể gán lại

// ⚠️ LƯU Ý: const với object/array
// CONST chỉ ngăn RE-ASSIGNMENT, KHÔNG ngăn MUTATION
const user = {
    name: "John",
    age: 25
};

user.age = 26; // ✅ OK - thay đổi property
user.name = "Jane"; // ✅ OK - thay đổi property
console.log("Modified user:", user);

// user = { name: "Bob", age: 30 }; // ❌ Error! Không thể gán lại object mới

const numbers: number[] = [1, 2, 3];
numbers.push(4); // ✅ OK - thay đổi nội dung array
console.log("Modified array:", numbers);

// numbers = [5, 6, 7]; // ❌ Error! Không thể gán lại array mới

// ============================================
// 3. TYPE ANNOTATIONS - Chú thích kiểu dữ liệu
// ============================================

// Cú pháp: variableName: type = value
let productName: string = "Laptop";
let price: number = 1000;
let inStock: boolean = true;

// Type inference - TypeScript tự suy luận kiểu
let autoString = "Hello"; // TypeScript tự hiểu đây là string
let autoNumber = 42; // TypeScript tự hiểu đây là number

// autoString = 123; // ❌ Error! TypeScript đã suy luận type là string

// Union Types - Nhiều kiểu có thể
let mixedValue: string | number;
mixedValue = "text"; // ✅ OK
mixedValue = 100; // ✅ OK
// mixedValue = true; // ❌ Error! boolean không nằm trong union type

// Any type - Bỏ qua type checking (không khuyến khích)
let anything: any = "string";
anything = 123; // ✅ OK
anything = true; // ✅ OK
anything = [1, 2, 3]; // ✅ OK - any chấp nhận mọi kiểu

// ============================================
// 4. SO SÁNH LET vs CONST / LET vs CONST Comparison
// ============================================

console.log("\n=== LET vs CONST Comparison ===");

// LET - Dùng khi giá trị CẦN thay đổi
let counter: number = 0;
counter++; // 1
counter++; // 2
counter++; // 3
console.log("Counter (let):", counter);

// CONST - Dùng khi giá trị KHÔNG thay đổi
const MAX_USERS: number = 100;
const API_URL: string = "https://api.example.com";
const TAX_RATE: number = 0.1;

console.log("Constants:", { MAX_USERS, API_URL, TAX_RATE });

// ============================================
// 5. VAR (Cũ - KHÔNG nên dùng) vs LET
// ============================================

// VAR - Function scope (phạm vi toàn function)
function testVar() {
    var x = 1;
    if (true) {
        var x = 2; // ⚠️ Cùng biến x! (function scope)
        console.log("Inside if (var):", x); // 2
    }
    console.log("Outside if (var):", x); // 2 - bị thay đổi!
}

// LET - Block scope (phạm vi trong block {})
function testLet() {
    let y = 1;
    if (true) {
        let y = 2; // ✅ Biến y khác! (block scope)
        console.log("Inside if (let):", y); // 2
    }
    console.log("Outside if (let):", y); // 1 - không bị ảnh hưởng
}

console.log("\n=== VAR vs LET ===");
testVar();
testLet();

// ============================================
// 6. BEST PRACTICES - Thực hành tốt nhất
// ============================================

// ✅ MẶC ĐỊNH dùng CONST
const appName: string = "My App";
const version: number = 1.0;

// ✅ Chỉ dùng LET khi THỰC SỰ cần thay đổi
let currentPage: number = 1;
let isLoading: boolean = false;

// ❌ TRÁNH dùng VAR (deprecated)
// var oldStyle = "Don't use this";

// ✅ Luôn khai báo TYPE (trừ khi TypeScript có thể suy luận rõ ràng)
const explicitType: string = "Good";
const inferredType = "Also OK"; // TypeScript tự suy luận

// ✅ Dùng CONST cho object/array không gán lại
const config = {
    timeout: 5000,
    retries: 3
};
config.timeout = 10000; // ✅ OK - chỉ thay đổi property

const items: string[] = ["a", "b", "c"];
items.push("d"); // ✅ OK - chỉ thay đổi nội dung

// ============================================
// 7. VÍ DỤ THỰC TẾ / PRACTICAL EXAMPLES
// ============================================

console.log("\n=== Practical Example: Shopping Cart ===");

// CONST cho giá trị không đổi
const SHIPPING_FEE: number = 5;
const FREE_SHIPPING_THRESHOLD: number = 50;

// LET cho giá trị thay đổi
let cartTotal: number = 0;
let itemCount: number = 0;

// Function thêm sản phẩm
function addToCart(itemPrice: number): void {
    cartTotal += itemPrice;
    itemCount++;
    console.log(`Added item: $${itemPrice}. Total: $${cartTotal}`);
}

addToCart(20);
addToCart(15);
addToCart(25);

// Tính phí ship
let shippingCost: number;
if (cartTotal >= FREE_SHIPPING_THRESHOLD) {
    shippingCost = 0;
    console.log("🎉 Free shipping!");
} else {
    shippingCost = SHIPPING_FEE;
    console.log(`Shipping: $${shippingCost}`);
}

const finalTotal: number = cartTotal + shippingCost;
console.log(`Final Total: $${finalTotal} (${itemCount} items)`);

// ============================================
// 8. TÓM TẮT / SUMMARY
// ============================================

console.log("\n=== Summary ===");
console.log(`
┌─────────────────────────────────────────────────────┐
│ LET vs CONST vs TYPE                                │
├─────────────────────────────────────────────────────┤
│ LET:                                                │
│   - Biến có thể thay đổi / Mutable variable        │
│   - Block scope                                     │
│   - Dùng khi cần gán lại giá trị / Use when value  │
│     needs to change                                 │
│                                                     │
│ CONST:                                              │
│   - Hằng số không gán lại / Cannot reassign        │
│   - Block scope                                     │
│   - Dùng mặc định / Use by default                 │
│   - Object/Array vẫn thay đổi được nội dung        │
│                                                     │
│ TYPE ANNOTATION:                                    │
│   - Khai báo kiểu dữ liệu / Declare data type      │
│   - Syntax: variable: type = value                 │
│   - Giúp phát hiện lỗi sớm / Early error detection │
│   - Tăng tính rõ ràng của code / Code clarity      │
└─────────────────────────────────────────────────────┘
`);
