for (let count=0; count < 6; count++) {
    console.log(`Count is: ${count}`);
}

let c = 0;
while (c < 9) {
    console.log(`Count is: ${c}`);
    c+=2;
}

let array = [20,12,23,41,1];
let total = 0;
for (let num of array) {
    total += num;
}
console.log(`Total is: ${total}`); // Total is: 97


// Phân loại giá thành sản phẩm, >100 là cao, 50-100 là trung bình, <50 là thấp


let quantity = 6;
let price = 80;
if (price >100) {
    console.log("The price is high");
} else if (price >= 50 && price <= 100) {
    console.log("The price is medium");
} else {
    console.log("The price is low");
}
if (quantity === 0) {
    console.log("You have no stock");
} else if (quantity <= 5) {
    console.log("Your stock is about to run out");
} else {
    console.log("You have sufficient stock");
}