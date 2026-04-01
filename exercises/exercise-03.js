// Exercise 3
// ----------
// GOAL: Log "Proceed to checkout" if the user is logged in.
//       Log "Please log in first." if the user is NOT logged in.
// When isLoggedIn is false, nothing is logged at all. Fix the code.

/*
const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Proceed to checkout");
}
*/

// Fix: ต้องเพิ่มส่วน else เพื่อให้เมื่อ isLoggedIn เป็น false จะได้ log ข้อความ "Please log in first." แทนที่จะไม่ log อะไรเลย
const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Proceed to checkout");
}
else
{
  console.log("Please log in first.");
}
