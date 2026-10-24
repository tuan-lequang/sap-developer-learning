// tạo array gồm ít nhất 5 object (sản phẩm)
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1000,
        quantity: 10
    },
    {
        id: 2,
        name: "Mouse",
        price: 25,
        quantity: 50
    },
    {
        id: 3,
        name: "Keyboard",
        price: 75,
        quantity: 30
    },
    {
        id: 4,
        name: "Monitor",
        price: 300,
        quantity: 20
    },
    {
        id: 5,
        name: "Headphones",
        price: 100,
        quantity: 40
    }
];
// dùng filter() lọc ra sản phẩm có quantity <= 35
const productsWithLowQuantity = products.filter(product => product.quantity <= 35);
productsWithLowQuantity.forEach(product => {
    console.log(`Product with quantity <= 35: ${product.name}, quantity: ${product.quantity}`);
});
// dùng find()  tìm sản phẩm có id = 3
const productWithId3 = products.find(product => product.id === 3);
if (productWithId3) {
    console.log(`Product with id = 3: ${productWithId3.name}, price: ${productWithId3.price}$`);
} else {
    console.log("Product with id = 3 not found");
}

// dùng map() tạo danh sách tên sản phẩm
const productNames = products.map(product => product.name);
console.log(productNames); // ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"]

import { calculateStockValue } from './day-04-functions.js';
const totalStockValue = products.reduce((sum, product) => sum + calculateStockValue(product.quantity, product.price), 0);
console.log(`Total stock value is : ${totalStockValue}$`);

// tính tổng quantity của array
const totalQuantity = products.reduce((sum, product) => sum+ product.quantity, 0);

console.log(`Total quantity of products is: ${totalQuantity}`); // Total quantity of products is: 150
