// Exercise 5
// ----------
// GOAL: Assign salePrice to displayPrice when isOnSale is true,
//       otherwise assign originalPrice.
// The code has a syntax error. Find and fix it.

const isOnSale = true;
const salePrice = 29.99;
const originalPrice = 49.99;

const displayPrice = isOnSale ? salePrice :originalPrice;
console.log("Price: $" + displayPrice);

// Fix: ต้องเพิ่มเครื่องหมาย ":" หลัง salePrice เพื่อให้เป็นรูปแบบของ ternary operator ที่ถูกต้อง คือ condition ? valueIfTrue : valueIfFalse
