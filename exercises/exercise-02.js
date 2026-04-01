// Exercise 2
// ----------
// GOAL: Log "Free shipping unlocked!" when cartTotal is 1000 or more.
//       Log "Add more items for free shipping." when it is under 1000.
// A customer with exactly 1000 in their cart should get free shipping,
// but currently they don't. Find and fix the bug.

/*
const cartTotal = 1000;

if (cartTotal > 1000) {
  console.log("Free shipping unlocked!");
} else {
  console.log("Add more items for free shipping.");
}
*/
// Fix: ต้องเปลี่ยนจาก cartTotal > 1000 เป็น cartTotal >= 1000 เพื่อให้ตรงกับเงื่อนไขที่กำหนดในโจทย์ คือ ลูกค้าที่มีมูลค่าในตะกร้าเท่ากับ 1000 จะได้รับการจัดส่งฟรีด้วยเช่นกัน

const cartTotal = 1000;

if (cartTotal >= 1000) {
  console.log("Free shipping unlocked!");
} else {
  console.log("Add more items for free shipping.");
}

