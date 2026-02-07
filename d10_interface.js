"use strict";
function printProduct(product) {
    console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
}
const product1 = {
    id: 1,
    name: "Laptop",
    price: 1000
};
printProduct(product1);
