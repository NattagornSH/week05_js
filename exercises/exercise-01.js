// Exercise 1
// ----------
// GOAL: Log "In stock" if stockStatus is "available", otherwise log "Out of stock".
// There is one bug on the if condition line. Find and fix it.

/*
const stockStatus = "available";

if (stockStatus = "available") {
  console.log("In stock");
} else {
  console.log("Out of stock");
}
*/

// Fix: ต้องเปลี่ยนจากการใช้เครื่องหมาย "=" ซึ่งเป็นการกำหนดค่า ให้เป็น "===" ซึ่งเป็นการเปรียบเทียบค่าในเงื่อนไขของ if statement เพื่อให้สามารถตรวจสอบได้ว่า stockStatus มีค่าเป็น "available" หรือไม่
const stockStatus = "available";

if (stockStatus === "available") {
  console.log("In stock");
} else {
  console.log("Out of stock");
}
