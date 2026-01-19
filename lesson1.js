console.log("XIn Chào");
console.log(3 + 8);

//1. Kiểu dữ liệu cơ bản
let number = 10; // number
let text = "Hello"; // string
let isActive = true; // boolean
console.log(typeof number); // "number"
console.log(typeof text); // "string"
console.log(typeof isActive); // "boolean"

//2. Array – Mảng (danh sách)
const colors = ["red", "green", "blue"];
console.log(colors[0]); // red
console.log(colors[2]); // blue

//3. Object – Tổ chức dữ liệu
const user = {
  name: "Nam",
  age: 35,
  isMarried: true,
};
console.log(user.name); // Nam
console.log(user.age); // 35

//4. Giá trị đặc biệt: null, undefined, NaN
// undefined- Biến được khai báo nhưng chưa gán giá trị
let a;
console.log(a); // undefined
// null -Cố tình để trống
let b = null;
console.log(b);
// NaN (Not a Number)-Kết quả không phải số
let c = Number("abc");
console.log(c); // NaN
// 5. Chuyển đổi kiểu dữ liệu
// JS tự động chuyển kiểu, nhưng nên chủ động chuyển.
// Chuyển sang Number
Number("123"); // 123
Number("abc"); // NaN
//  Chuyển sang String
String(100); // "100"
//  Chuyển sang Boolean
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("hi"); // true
//  Giá trị false trong JS:
false;
0;
("");
null;
undefined;
NaN;
