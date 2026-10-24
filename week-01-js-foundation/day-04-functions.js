// tạo hàm calculateStockValue(quantity, price)
export function calculateStockValue(quantity, price) {
    return quantity * price;
}

let stockValue = calculateStockValue(6, 80);
console.log(`Stock value is: ${stockValue}`); // Stock value is: 480

// tạo hàm isLowStock(quantity, threshold)
function isLowStock(quantity, threshold) {
    if (quantity <= threshold) {
        return true;
    } else {
        return false;
    }
}
let lowstock = isLowStock(0, 6);
console.log(`is low stock: ${lowstock}`); // is low stock: true
// tạo hàm formatProdcutLabel(name, price)
function formatProductLabel(name, price) {
    return `Product: ${name}, price: ${price}$`;
}
let productLabel = formatProductLabel("Laptop", 1000);
console.log(productLabel); // Product: Laptop, price: 1000

// tạo hàm applyDiscount(price, discount)
function applyDiscount(price, discount) {
    return price = price * (1 - discount/100);
}
let post_price= applyDiscount(5000, 20);
console.log(`Price after discount: ${post_price}$`); // Price after discount: 4000$