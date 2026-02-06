export { }
// ============================================
// TYPESCRIPT BASICS: PRIMITIVE TYPES, LET, CONST & TYPE ANNOTATIONS
// CƠ BẢN TYPESCRIPT: KIỂU NGUYÊN THỦY, LET, CONST & CHÚ THÍCH KIỂU
// ============================================

// ============================================
// PHẦN 1: PRIMITIVE TYPES - CÁC KIỂU NGUYÊN THỦY
// PART 1: PRIMITIVE TYPES
// ============================================

// --------------------------------------------
// 1. STRING - Chuỗi ký tự
// Dùng để lưu trữ văn bản / Used to store text
// --------------------------------------------
let username: string = "John";
let email: string = "john@example.com";
let greeting: string = 'Hello, World!'; // Có thể dùng ' hoặc " / Can use ' or "
let templateString: string = `Welcome, ${username}!`; // Template literal với backticks

// --------------------------------------------
// 2. NUMBER - Số
// Lưu trữ cả số nguyên và số thập phân / Stores both integers and decimals
// --------------------------------------------
let age: number = 30;
let price: number = 1000;
let discount: number = 0.15; // 15% giảm giá / 15% discount
let temperature: number = -5; // Số âm / Negative number
let hexValue: number = 0xFF; // Hệ hex = 255
let binaryValue: number = 0b1010; // Hệ nhị phân = 10

// --------------------------------------------
// 3. BOOLEAN - Giá trị logic
// Chỉ có 2 giá trị: true hoặc false / Only 2 values: true or false
// --------------------------------------------
let isStudent: boolean = true;
let in_stock: boolean = true;
let isLoggedIn: boolean = false;
let hasDiscount: boolean = discount > 0; // Kết quả của biểu thức logic

// --------------------------------------------
// 4. NULL và UNDEFINED
// Đại diện cho giá trị "không có" / Represent "no value"
// --------------------------------------------
let emptyValue: null = null; // Giá trị rỗng được gán cố ý / Intentionally empty
let notAssigned: undefined = undefined; // Chưa được gán giá trị / Not yet assigned
let maybeString: string | null = null; // Union type: có thể là string hoặc null

// --------------------------------------------
// 5. SYMBOL - Định danh duy nhất (ES6+)
// Tạo giá trị duy nhất / Creates unique values
// --------------------------------------------
let uniqueId: symbol = Symbol("id");
let anotherId: symbol = Symbol("id");
// uniqueId !== anotherId (mặc dù cùng description)

// --------------------------------------------
// 6. BIGINT - Số nguyên lớn (ES2020+)
// Cho số nguyên lớn hơn Number.MAX_SAFE_INTEGER / For integers larger than Number.MAX_SAFE_INTEGER
// --------------------------------------------
let bigNumber: bigint = 9007199254740991n; // Thêm 'n' ở cuối / Add 'n' suffix
let anotherBig: bigint = BigInt("9007199254740991");

// ============================================
// PHẦN 2: LET vs CONST - BIẾN vs HẰNG SỐ
// PART 2: LET vs CONST - VARIABLES vs CONSTANTS
// ============================================

// --------------------------------------------
// LET - Biến có thể thay đổi / Mutable Variable
// --------------------------------------------

// Khai báo với let - giá trị CÓ THỂ thay đổi
let userAge: number = 25;
console.log("Initial age:", userAge); // 25

userAge = 30; // ✅ OK - có thể gán lại giá trị mới
console.log("Updated age:", userAge); // 30

// userAge = "thirty"; // ❌ Error! Không thể gán string cho number type

// Block scope - let chỉ tồn tại trong block {}
{
    let blockVariable: string = "I'm inside a block";
    console.log(blockVariable); // ✅ OK
}
// console.log(blockVariable); // ❌ Error! Không tồn tại ngoài block

// --------------------------------------------
// CONST - Hằng số không thay đổi / Immutable Constant
// --------------------------------------------

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
// PHẦN 3: TYPE ANNOTATIONS - CHÚ THÍCH KIỂU
// PART 3: TYPE ANNOTATIONS
// ============================================

// Cú pháp: variableName: type = value
let productName: string = "Laptop";
let productPrice: number = 1000;
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
// PHẦN 4: VAR vs LET - SO SÁNH SCOPE
// PART 4: VAR vs LET - SCOPE COMPARISON
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
// PHẦN 5: BEST PRACTICES - THỰC HÀNH TốT NHẤT
// PART 5: BEST PRACTICES
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
// PHẦN 6: VÍ DỤ THỰC TẾ - PRACTICAL EXAMPLES
// ============================================

console.log("\n=== Example 1: Product Information ===");

// Thông tin sản phẩm với primitive types
const product_name: string = "laptop";
const product_price: number = 1000;
const product_in_stock: boolean = true;
const product_description: string | null = null; // Chưa có mô tả

console.log(`Name: ${product_name}`);
console.log(`Price: $${product_price}`);
console.log(`In Stock: ${product_in_stock}`);
console.log(`Description: ${product_description}`);

// Tính toán giá sau giảm
const finalPrice: number = product_price * (1 - discount);
console.log("\n=== Price Calculation ===");
console.log(`Original: $${product_price}`);
console.log(`Discount: ${discount * 100}%`);
console.log(`Final Price: $${finalPrice.toFixed(2)}`);

// Kiểm tra điều kiện mua hàng
const canPurchase: boolean = product_in_stock && finalPrice > 0;
console.log("\n=== Purchase Check ===");
console.log(`Can purchase: ${canPurchase}`);

console.log("\n=== Example 2: Shopping Cart ===");

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

const orderTotal: number = cartTotal + shippingCost;
console.log(`Final Total: $${orderTotal} (${itemCount} items)`);

// ============================================
// PHẦN 7: LET vs CONST COMPARISON
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
// TÓM TẮT / SUMMARY
// ============================================

console.log("\n=== SUMMARY ===");
console.log(`
┌───────────────────────────────────────────────────────────┐
│ TYPESCRIPT BASICS SUMMARY                                 │
├───────────────────────────────────────────────────────────┤
│                                                           │
│ 📦 PRIMITIVE TYPES (6 loại):                             │
│   1. string   - Chuỗi ký tự                              │
│   2. number   - Số (integer & decimal)                   │
│   3. boolean  - true/false                               │
│   4. null     - Giá trị rỗng                             │
│   5. undefined - Chưa gán giá trị                        │
│   6. symbol   - Định danh duy nhất                       │
│   7. bigint   - Số nguyên cực lớn                        │
│                                                           │
│ 🔑 LET vs CONST:                                          │
│   LET:                                                    │
│     ✅ Biến có thể thay đổi / Mutable                    │
│     ✅ Block scope                                       │
│     ✅ Dùng khi cần gán lại / Use when reassigning       │
│                                                           │
│   CONST:                                                  │
│     ✅ Hằng số không gán lại / Cannot reassign           │
│     ✅ Block scope                                       │
│     ✅ Dùng mặc định / Use by default                    │
│     ⚠️  Object/Array vẫn thay đổi được nội dung          │
│                                                           │
│ 📝 TYPE ANNOTATION:                                       │
│   • Syntax: variable: type = value                       │
│   • Giúp phát hiện lỗi sớm / Early error detection       │
│   • IntelliSense tốt hơn / Better IDE support            │
│   • Code tự document / Self-documenting code             │
│                                                           │
│ ⚠️  VAR: KHÔNG nên dùng / DON'T USE (deprecated)          │
│                                                           │
└───────────────────────────────────────────────────────────┘
`);
