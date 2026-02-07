"use strict";
// Ví dụ 1: data chỉ có 1 thuộc tính / Example 1: data with only 1 property
const userRes = {
    status: 200,
    data: { name: "Alice" }
};
console.log(userRes);
// Ví dụ 2: data có NHIỀU thuộc tính / Example 2: data with MULTIPLE properties
const userDetailRes = {
    status: 200,
    data: {
        name: "Bob",
        age: 25,
        email: "bob@example.com"
    }
};
console.log(userDetailRes);
const productRes = {
    status: 200,
    data: {
        id: 101,
        name: "Electronics",
        title: "Laptop",
        price: 999.99,
        inStock: true
    }
};
console.log(productRes);
// Ví dụ 4: data là mảng các object / Example 4: data is an array of objects
const usersListRes = {
    status: 200,
    data: [
        { name: "Alice", role: "Admin" },
        { name: "Bob", role: "User" },
        { name: "Charlie", role: "Moderator" }
    ]
};
console.log(usersListRes);
const new_box = {
    content: [1, 2, 3]
};
console.log(new_box);
