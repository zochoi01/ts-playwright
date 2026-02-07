"use strict";
// ============================================
// IMPLEMENT INTERFACE - Triển khai Interface
// ============================================
// Class Button PHẢI có phương thức click() vì implement Clickable
// Class Button MUST have click() method because it implements Clickable
class Button {
    click() {
        console.log("Button clicked!");
    }
}
const btn = new Button();
btn.click(); // Output: Button clicked!
class DragAndDropItem {
    drop() {
        console.log("Item dropped!");
    }
}
const dropItem = new DragAndDropItem();
dropItem.drop(); // Output: Item dropped!
// Class 1: Thanh toán bằng thẻ tín dụng / Class 1: Credit Card Payment
class CreditCardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    processPayment(amount) {
        console.log(`💳 Processing $${amount} via Credit Card: ${this.cardNumber}`);
    }
    getPaymentInfo() {
        return `Credit Card ending in ${this.cardNumber.slice(-4)}`;
    }
}
// Class 2: Thanh toán bằng PayPal / Class 2: PayPal Payment
class PayPalPayment {
    constructor(email) {
        this.email = email;
    }
    processPayment(amount) {
        console.log(`💰 Processing $${amount} via PayPal: ${this.email}`);
    }
    getPaymentInfo() {
        return `PayPal account: ${this.email}`;
    }
}
// Class 3: Thanh toán bằng tiền mặt / Class 3: Cash Payment
class CashPayment {
    processPayment(amount) {
        console.log(`💵 Processing $${amount} via Cash`);
    }
    getPaymentInfo() {
        return "Cash payment";
    }
}
// POLYMORPHISM - Đa hình: Dùng interface làm kiểu dữ liệu
// POLYMORPHISM: Use interface as data type
function checkout(paymentMethod, amount) {
    console.log(`\n--- Checkout ---`);
    console.log(`Payment method: ${paymentMethod.getPaymentInfo()}`);
    paymentMethod.processPayment(amount);
    console.log(`--- Complete ---\n`);
}
// Sử dụng / Usage:
const creditCard = new CreditCardPayment("1234-5678-9012-3456");
const paypal = new PayPalPayment("user@example.com");
const cash = new CashPayment();
checkout(creditCard, 100); // Thanh toán bằng thẻ / Pay with card
checkout(paypal, 50); // Thanh toán bằng PayPal / Pay with PayPal
checkout(cash, 25); // Thanh toán bằng tiền mặt / Pay with cash
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    start() {
        console.log(`🚗 ${this.brand} ${this.model} is starting...`);
    }
    stop() {
        console.log(`🛑 ${this.brand} ${this.model} has stopped.`);
    }
}
class Motorcycle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    start() {
        console.log(`🏍️  ${this.brand} ${this.model} is starting...`);
    }
    stop() {
        console.log(`🛑 ${this.brand} ${this.model} has stopped.`);
    }
}
// Hàm nhận bất kỳ Vehicle nào (Car, Motorcycle, ...)
// Function accepts any Vehicle (Car, Motorcycle, ...)
function testDrive(vehicle) {
    console.log(`\n--- Test Drive: ${vehicle.brand} ${vehicle.model} ---`);
    vehicle.start();
    console.log("Driving...");
    vehicle.stop();
    console.log("--- End Test Drive ---\n");
}
const myCar = new Car("Toyota", "Camry");
const myBike = new Motorcycle("Honda", "CBR");
testDrive(myCar); // Test drive xe hơi / Test drive car
testDrive(myBike); // Test drive xe máy / Test drive motorcycle
// ============================================
// TÓM TẮT / SUMMARY
// ============================================
/*
1. Interface = "Hợp đồng" định nghĩa cấu trúc / Interface = "Contract" defining structure
2. implements = Class triển khai interface / implements = Class implements interface
3. Class PHẢI có tất cả thuộc tính/phương thức của interface / Class MUST have all properties/methods from interface
4. Polymorphism: Có thể dùng interface làm kiểu dữ liệu / Polymorphism: Can use interface as data type
5. Lợi ích / Benefits:
   - Type safety (An toàn kiểu)
   - Code reusability (Tái sử dụng code)
   - Flexibility (Linh hoạt - dễ thay đổi implementation)
*/ 
