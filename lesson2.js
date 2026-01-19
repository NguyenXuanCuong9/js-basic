// 1) Toán tử số học: + - * /
// + (cộng) — có 2 nghĩa
// A) Cộng số
let a1 = 10;
let b1 = 5;
console.log(a1 + b1); // 15

// B) Nối chuỗi (string concatenation)
console.log("10" + 5); // "105"
console.log(10 + "5"); // "105"

// ✅ Vì có string → JS ưu tiên nối chuỗi.
// 📌 Cách tránh lỗi: ép kiểu rõ ràng

console.log(Number("10") + 5); // 15

// - (trừ) — chỉ là toán học
console.log(10 - 3); // 7
console.log("10" - 3); // 7 (JS ép "10" thành số)
console.log("a" - 3); // NaN (không chuyển được)

// * (nhân)
console.log(4 * 5); // 20
console.log("4" * 5); // 20
console.log("a" * 5); // NaN

// / (chia)
console.log(10 / 2); // 5
console.log(10 / 3); // 3.3333333333333335

//  JS chia là ra số thực, không tự làm tròn.
// Muốn làm tròn:
console.log(Math.floor(10 / 3)); // 3
console.log(Math.ceil(10 / 3)); // 4
console.log(Math.round(10 / 3)); // 3

// 2) Toán tử ++ và -- (tăng/giảm nhanh)
// A) Bản chất
let x = 5;
x++; // x = x + 1
x--; // x = x - 1

// B) Tiền tố vs Hậu tố (cực quan trọng)
// Giả sử:
let a2 = 10;
// a++ (hậu tố): dùng trước, tăng sau
let z2 = a2++;
console.log("Z2=", z2);
// z = 10, a = 11

// ++a (tiền tố): tăng trước, dùng sau
let z3 = ++a2;
console.log("z3= ", z3);
// a = 11, z = 11

// 👉 Mẹo nhớ:
// dấu ++ đứng trước → tăng trước
// dấu ++ đứng sau → dùng trước

// C) Ví dụ “mổ xẻ” như bạn thích
let a4 = 10;
let b4 = 5;

let z4 = ++a4 + b4++ - a4++ + ++b4 + --a4 + --b4 + a4-- + b4--;
console.log("z4= ", z4);

/* // Từng bước:

// 🔹 Bước 1: ++a
// Tăng a trước
a: 10 → 11
// Giá trị dùng trong phép tính: 11
a = 11
b = 5
z = 11
// 🔹 Bước 2: + b++
// Dùng b trước
// Giá trị dùng: 5
// Sau đó b tăng: 5 → 6
a = 11
b = 6
z = 11 + 5 = 16
// 🔹 Bước 3: - a++
// Dùng a trước
// Giá trị trừ: 11
// Sau đó a tăng: 11 → 12
a = 12
b = 6
z = 16 - 11 = 5
// 🔹 Bước 4: + ++b
// Tăng b trước
// b: 6 → 7
// Giá trị cộng: 7
a = 12
b = 7
z = 5 + 7 = 12
// 🔹 Bước 5: + --a
// Giảm a trước
a: 12 → 11
// Giá trị cộng: 11
a = 11
b = 7
z = 12 + 11 = 23
// 🔹 Bước 6: + --b
// Giảm b trước
// b: 7 → 6
// Giá trị cộng: 6
a = 11
b = 6
z = 23 + 6 = 29
// 🔹 Bước 7: + a--
// Dùng a trước
// Giá trị cộng: 11
// Sau đó a giảm: 11 → 10
a = 10
b = 6
z = 29 + 11 = 40
// 🔹 Bước 8: + b--
// Dùng b trước
// Giá trị cộng: 6
// Sau đó b giảm: 6 → 5
a = 10
b = 5
z = 40 + 6 = 46
// ✅ KẾT QUẢ CUỐI CÙNG
z = 46
a = 10
b = 5 */

// 3) Toán tử % (chia lấy dư)
// A) Ý nghĩa
// a % b = phần dư của phép chia a / b
// Ví dụ:
// console.log(10 % 3); // 1
// console.log(9 % 3);  // 0
// B) Ứng dụng 1: kiểm tra chẵn/lẻ
let n = 8;
console.log(n % 2 === 0); // true (chẵn)
// C) Ứng dụng 2: lặp theo chu kỳ
// Ví dụ: cứ 3 bước làm 1 lần
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) console.log("i chia hết cho 3:", i);
}

// D) Lưu ý với số âm (biết để khỏi bất ngờ)
console.log(-7 % 2); // -1
console.log(7 % -2); // 1
// JS giữ dấu của số bên trái.

// 4) Toán tử gán kết hợp: += -= *= /= %=
// A) Bản chất
// let x = 10;

x += 5; // x = x + 5  -> 15
x -= 2; // x = x - 2  -> 13
x *= 3; // x = x * 3  -> 39
x /= 3; // x = x / 3  -> 13
x %= 5; // x = x % 5  -> 3

// B) Ví dụ thực tế: cộng dồn (rất hay dùng)
let total = 0;

total += 100; // 100
total += 50; // 150
total -= 30; // 120
console.log("total=", total); // 120

// C) Bẫy giống toán tử + (vì có thể nối chuỗi)
let s1 = "10";
s1 += 5;
console.log("s1= ", s1); // "105"

// ✅ Cách đúng nếu muốn cộng số:

let s2 = "10";
s2 = Number(s2);
s2 += 5;
console.log("s2= ", s2); // 15
//==================================================================SO SÁNH============

// 1.3 So sánh với string (bẫy ⚠️)
console.log("chuoi và số:  ", "10" > 5); // true
// khi có number nó sẽ ép kiểu về number trước
"2" > "10"; // true ❗
// cả 2 là string thì so sánh theo chữ đầu, ở trên nó so 2 với 1, bỏ qua số 0
// 📌 Nguyên tắc an toàn:
// Khi so sánh → ép về Number trước
Number("2") > Number("10"); // false

// 2.4 Logic KHÔNG chỉ trả về true/false (bẫy lớn ❗)
true && "Nam"; // "Nam"
false && "Nam"; // false

false || "Nam"; // "Nam"
true || "Nam"; // true

/* 📌 Quy tắc nhớ:
&& → gặp false thì dừng
|| → gặp true thì dừng
👉 JS trả về giá trị cuối cùng, không luôn là boolean.
 */

//================================================3️⃣ ĐỘ ƯU TIÊN TOÁN TỬ (rất quan trọng)
/* 3.1 Thứ tự ưu tiên (từ cao → thấp)

()
* / %
+ -
> < >= <=
=== !==
&&
||
=

3.2 Ví dụ dễ sai
true || false && false

👉 JS hiểu là:
true || (false && false)
false && false → false
true || false → true
📌 Kết quả: true


*/

//============================================4️⃣ TOÁN TỬ TERNARY (? :)
// 4.1 Cú pháp
// condition ? valueIfTrue : valueIfFalse;
// 4.2 Ví dụ cơ bản
let age = 20;
let result = age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi";

// 👉 Tương đương:

if (age >= 18) {
  result = "Đủ tuổi";
} else {
  result = "Chưa đủ tuổi";
}

/* 4.3 Khi nào nên dùng ternary?

✅ Khi:
điều kiện ngắn
trả về 1 giá trị

❌ Không nên dùng khi:
nhiều điều kiện lồng nhau
logic phức tạp

4.4 Ví dụ kết hợp logic + ternary
let isLogin = true;
let isAdmin = false;

let message = isLogin && isAdmin
  ? "Admin page"
  : "User page";
*/

/* 
🧠 TÓM TẮT BẢN CHẤT
> < >= <= → so sánh số
&& → tất cả đúng
|| → chỉ cần 1 đúng
! → đảo ngược
Ưu tiên toán tử → dùng ngoặc cho chắc
Ternary → if/else ngắn gọn   */
